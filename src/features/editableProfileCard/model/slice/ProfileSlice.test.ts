import { CountrySchema } from 'entities/Country'
import { CurrencySchema } from 'entities/Currency'
import { ProfileThunk } from '../services/ProfileThunk/ProfileThunk'
import { ProfileActions, ProfileReducer } from './ProfileSlice'
import { ProfileCardSchema } from '../types/EditableProfileCardSchema'

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
        const state: DeepPartial<ProfileCardSchema> = { readonly: false }
        expect(ProfileReducer(state as ProfileCardSchema, ProfileActions.setReadonly(true)))
            .toEqual({ readonly: true })
    })

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileCardSchema> = { data, form: { first: '' } }
        expect(ProfileReducer(state as ProfileCardSchema, ProfileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateError: undefined,
                data,
                form: data,
            })
    })

    test('pending', () => {
        const state: DeepPartial<ProfileCardSchema> = { isLoading: false, error: 'error' }
        expect(ProfileReducer(state as ProfileCardSchema, ProfileThunk.pending))
            .toEqual({ isLoading: true, error: undefined })
    })

    test('fulfilled', () => {
        const state: DeepPartial<ProfileCardSchema> = { isLoading: true }
        expect(ProfileReducer(state as ProfileCardSchema, ProfileThunk.fulfilled(data, '', '1')))
            .toEqual({
                data,
                form: data,
                isLoading: false,
                readonly: true,
                validateError: undefined,
            })
    })

    test('rejected', () => {
        const state: DeepPartial<ProfileCardSchema> = { }
        expect(ProfileReducer(state as ProfileCardSchema, ProfileThunk.rejected))
            .toEqual({
                isLoading: false,
            })
    })
})
