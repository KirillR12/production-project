import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { ArticlePageNextThunk } from './ArticlePageNextThunk'
import { ArticlePageThunk } from '../ArticlePageThunk/ArticlePageThunk'

jest.mock('../ArticlePageThunk/ArticlePageThunk')

describe('ArticlePageNextThunk', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(ArticlePageNextThunk, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(ArticlePageThunk).toHaveBeenCalledWith({ page: 3 })
    })

    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(ArticlePageNextThunk, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: false,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(ArticlePageThunk).not.toHaveBeenCalled()
    })

    test('loading true', async () => {
        const thunk = new TestAsyncThunk(ArticlePageNextThunk, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(ArticlePageThunk).not.toHaveBeenCalled()
    })
})
