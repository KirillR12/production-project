import { StateSchema } from 'app/providers/StoreProvider'
import { getAddCommentForm } from './getAddCommentForm'

describe('getAddCommentForm', () => {
    test('getAddCommentForm', () => {
        const data = {
            comment: 'comment',
            error: undefined,
        }
        const state: DeepPartial<StateSchema> = {
            addComment: data,
        }
        expect(getAddCommentForm(state as StateSchema)).toEqual('comment')
    })

    test('getAddCommentForm error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentForm(state as StateSchema)).toEqual('')
    })

    test('getAddCommentFormError', () => {
        const data = {
            comment: '',
            error: 'error',
        }
        const state: DeepPartial<StateSchema> = {
            addComment: data,
        }
        expect(getAddCommentForm(state as StateSchema)).toEqual('')
    })

    test('getAddCommentFormError error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentForm(state as StateSchema)).toEqual('')
    })
})
