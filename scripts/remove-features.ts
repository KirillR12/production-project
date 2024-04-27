import { Project, Node, SyntaxKind } from 'ts-morph'

const project = new Project()

const removeFeatureName = process.argv[2]
const featureState = process.argv[3]

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
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true
        }
    })

    return isToggleFeatures
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
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
    })
})

project.save()
