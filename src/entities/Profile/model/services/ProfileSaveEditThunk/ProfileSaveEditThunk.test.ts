import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { CurrencySchema } from 'entities/Currency'
import { CountrySchema } from 'entities/Country'
import { ProfileSaveEditThunk } from './ProfileSaveEditThunk'
import { ValidateProfileSchema } from '../../types/ProfileSchema'

const data = {
    username: 'admin',
    age: 22,
    country: CountrySchema.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: CurrencySchema.USD,
}

describe('ProfileSaveEditThunk.test', () => {
    test('success save', async () => {
        const thunk = new TestAsyncThunk(ProfileSaveEditThunk, { profile: { form: data } })

        thunk.api.put.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error save', async () => {
        const thunk = new TestAsyncThunk(ProfileSaveEditThunk, ({ profile: { form: data } }))

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileSchema.SERVER_ERROR])
    })

    test('error save', async () => {
        const thunk = new TestAsyncThunk(ProfileSaveEditThunk, ({ profile: { form: { ...data, lastname: '' } } }))

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileSchema.INCORRECT_USER_DATA])
    })
})
