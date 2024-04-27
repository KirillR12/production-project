import { Project, SyntaxKind } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/ArticleDetaliPage.tsx')

const files = project.getSourceFiles()

// function isToggleFunction(node: Node) {
//     let isToggleFeatures = false

//     node.forEachChild((child) => {
//         if (
//             child.isKind(SyntaxKind.Identifier) &&
//             child.getText() === 'toggleFeatures'
//         ) {
//             isToggleFeatures = true
//         }
//     })

//     return isToggleFeatures
// }

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression
            )
            const featuresNameProperty = objectOptions?.getProperty('name')

            if (featuresNameProperty) {
                console.log(
                    featuresNameProperty
                        .getFirstDescendantByKind(SyntaxKind.StringLiteral)
                        ?.getText()
                )
            }
        }
    })
})

project.save()
