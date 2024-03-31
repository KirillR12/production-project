import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { ArticleDetaliThunk } from './ArticleDetaliThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

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

describe('ArticleDetaliThunk', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(ArticleDetaliThunk)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk('1')

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(ArticleDetaliThunk)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
