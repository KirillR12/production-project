import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleRecommendsError, getArticleRecommendsIsLoading } from './getArticleRecommends'

describe('getArticleRecommends', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetaliPage: {
                recommendations: {
                    isLoading: true,
                },
            },
        }
        expect(getArticleRecommendsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleRecommendsError(state as StateSchema)).toEqual(undefined)
    })
})
