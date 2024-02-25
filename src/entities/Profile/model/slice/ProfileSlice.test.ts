import { CountrySchema } from 'entities/Country'
import { CurrencySchema } from 'entities/Currency'
import { ProfileThunk } from '../services/ProfileThunk/ProfileThunk'
import { ProfileSchema, ValidateProfileSchema } from '../types/ProfileSchema'
import { ProfileActions, ProfileReducer } from './ProfileSlice'

const data = {
    username: 'admin',
    age: 22,
    country: CountrySchema.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: CurrencySchema.USD,
}

describe('ProfileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.setReadonly(true)))
            .toEqual({ readonly: true })
    })

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { first: '' } }
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateError: undefined,
                data,
                form: data,
            })
    })

    test('pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, error: 'error' }
        expect(ProfileReducer(state as ProfileSchema, ProfileThunk.pending))
            .toEqual({ isLoading: true, error: undefined })
    })

    test('fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true }
        expect(ProfileReducer(state as ProfileSchema, ProfileThunk.fulfilled(data, '')))
            .toEqual({
                data,
                form: data,
                isLoading: false,
                readonly: true,
                validateError: undefined,
            })
    })

    test('rejected', () => {
        const state: DeepPartial<ProfileSchema> = { }
        expect(ProfileReducer(state as ProfileSchema, ProfileThunk.rejected))
            .toEqual({
                isLoading: false,
            })
    })
})
