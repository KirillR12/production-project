import { Project, Node, SyntaxKind, JsxAttribute } from 'ts-morph'

const project = new Project()

const removeFeatureName = process.argv[2]
const featureState = process.argv[3]

const toggleFunctionName = 'toggleFeatures'
const toggleComponentName = 'ToggleFeatures'

if (!removeFeatureName) {
    throw new Error('Укажите название фичи-флага')
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on/off)')
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное значение состояние фичи (on/off)')
}

project.addSourceFilesAtPaths('src/**/*.tsx')
project.addSourceFilesAtPaths('src/**/*.ts')

const files = project.getSourceFiles()

function isToggleFunction(node: Node) {
    let isToggleFeatures = false

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true
        }
    })

    return isToggleFeatures
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

    return identifier?.getText() === toggleComponentName
}

const replaceToggleFunction = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression
    )

    if (!objectOptions) return

    const featuresNameProperty = objectOptions.getProperty('name')
    const onFunctionProperty = objectOptions.getProperty('on')
    const offFunctionProperty = objectOptions.getProperty('off')

    const featuresName = featuresNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
    )

    const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
    )

    if (featuresName !== removeFeatureName) return

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
    }

    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
    }
}

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
    jsxAttributes.find((node) => node.getNameNode().getText() === name)

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText()

    if (value?.startsWith('(')) {
        return value.slice(1, -1)
    }

    return value
}

const replaceToggleComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

    const onAttribute = getAttributeNodeByName(attributes, 'on')
    const offAttribute = getAttributeNodeByName(attributes, 'off')

    const featureAttribute = getAttributeNodeByName(attributes, 'feature')

    const featureName = featureAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1)

    if (featureName !== removeFeatureName) return

    const onValue = getReplacedComponent(onAttribute)
    const offValue = getReplacedComponent(offAttribute)

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue)
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue)
    }
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node)
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceToggleComponent(node)
        }
    })
})

project.save()
