import { ArticleDetaliReducer } from './ArticleDetaliSlice'
import { ArticleSchema } from '../../types/ArticleSchema'
import { ArticleDetaliThunk } from '../../servers/ArticleDetaliThunk/ArticleDetaliThunk'

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

describe('ArticleDetaliSlice', () => {
    test('pending', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: false,
            error: 'error',
        }
        expect(
            ArticleDetaliReducer(
                state as ArticleSchema,
                ArticleDetaliThunk.pending
            )
        ).toEqual({ isLoading: true, error: undefined })
    })

    test('fulfilled', () => {
        const state: DeepPartial<ArticleSchema> = { data }
        expect(
            ArticleDetaliReducer(
                state as ArticleSchema,
                ArticleDetaliThunk.fulfilled(data, '', '1')
            )
        ).toEqual({
            isLoading: false,
            data,
        })
    })

    test('rejected', () => {
        const state: DeepPartial<ArticleSchema> = { error: 'error' }
        expect(
            ArticleDetaliReducer(
                state as ArticleSchema,
                ArticleDetaliThunk.rejected
            )
        ).toEqual({ isLoading: false, error: undefined })
    })
})
