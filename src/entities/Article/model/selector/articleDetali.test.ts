import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetaliData, getArticleDetaliError, getArticleDetaliIsLoading } from './articleDetali'

describe('getArticleDetali', () => {
    test('getArticleDetaliData', () => {
        const data = {
            id: '1',
            title: 'string',
            subtitle: 'string',
            img: '...',
            user: {
                username: 'kirill',
                avatar: '...',
                id: '1',
            },
            views: 12,
            createdAt: '12.03.23',
            type: [],
            blocks: [],
        }
        const state: DeepPartial<StateSchema> = {
            articleDetali: {
                data,
            },
        }
        expect(getArticleDetaliData(state as StateSchema)).toEqual(data)
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetaliData(state as StateSchema)).toEqual(undefined)
    })

    test('getArticleDetaliIsLoading', () => {
        const data = {
            id: '1',
            title: 'string',
            subtitle: 'string',
            img: '...',
            user: {
                username: 'kirill',
                avatar: '...',
                id: '1',
            },
            views: 12,
            createdAt: '12.03.23',
            type: [],
            blocks: [],
        }
        const state: DeepPartial<StateSchema> = {
            articleDetali: {
                data,
                isLoading: true,
            },
        }
        expect(getArticleDetaliIsLoading(state as StateSchema)).toEqual(true)
    })

    test('errorIsLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetaliIsLoading(state as StateSchema)).toEqual(undefined)
    })

    test('getArticleDetaliError', () => {
        const data = {}
        const state: DeepPartial<StateSchema> = {
            articleDetali: {
                data,
                error: 'error',
            },
        }
        expect(getArticleDetaliError(state as StateSchema)).toEqual('error')
    })

    test('errorError', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetaliError(state as StateSchema)).toEqual(undefined)
    })
})
