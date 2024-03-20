import { AddCommentFormSchema } from '../types/addCommentForm'
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFormSlice', () => {
    test('setText', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            comment: 'comment',
            error: undefined,
        }
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('123')))
            .toEqual({ comment: '123', error: undefined })
    })

    test('error', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            comment: 'comment',
            error: 'error',
        }
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('')))
            .toEqual({ comment: '', error: 'error' })
    })
})
