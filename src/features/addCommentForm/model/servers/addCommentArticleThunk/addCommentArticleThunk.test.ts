import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { addCommentArticleThunk } from './addCommentArticleThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const data = {
    articleId: '123',
    userId: '123',
}

describe('addCommentArticleThunk', () => {
    // test('success', async () => {
    //     const thunk = new TestAsyncThunk(addCommentArticleThunk)
    //     thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    //     const result = await thunk.callThunk('123')

    //     expect(mockedAxios.get).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(data)
    // })

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentArticleThunk)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
