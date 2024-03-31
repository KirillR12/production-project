import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { CurrencySchema } from '@/entities/Currency'
import { ProfileThunk } from './ProfileThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const dataProfile = {
    first: 'Кирилл',
    lastname: 'Федотов',
    age: 20,
    currency: CurrencySchema.RUB,
    city: 'Saratov',
    username: 'admin',
}

describe('ProfileThunk', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(ProfileThunk)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: dataProfile }))

        const result = await thunk.callThunk('1')

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(dataProfile)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(ProfileThunk)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
