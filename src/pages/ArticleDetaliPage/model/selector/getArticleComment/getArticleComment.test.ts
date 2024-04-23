import { StateSchema } from '@/app/providers/StoreProvider'
import {
    getArticleCommentError,
    getArticleCommentIsLoading,
} from './getArticleComment'

describe('getArticleRecommends', () => {
    test('succes', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetaliPage: {
                comments: {
                    isLoading: true,
                },
            },
        }
        expect(getArticleCommentIsLoading(state as StateSchema)).toEqual(true)
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleCommentError(state as StateSchema)).toEqual(undefined)
    })
})
