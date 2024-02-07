import axios from 'axios'
import { UserActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { LoginByUsername } from './LoginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('LoginByUsername', () => {
    test('login succes ', async () => {
        const userValue = { username: 'admin', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(LoginByUsername)
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthUser(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('login error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(LoginByUsername)
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
