import { CommentBlock } from '../../../src/entities/CommentBlock'

export const addComment = (text: string = 'test') => {
    cy.getByTestId('AddCommentForm.Input').type(text)
    cy.getByTestId('AddCommentForm.Btn').click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text?: string): Chainable<CommentBlock>
        }
    }
}
