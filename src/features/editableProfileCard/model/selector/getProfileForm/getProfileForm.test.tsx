import { StateSchema } from '@/app/providers/StoreProvider'
import { CurrencySchema } from '@/entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
    test('succes', () => {
        const form = {
            first: 'Кирилл',
            lastname: 'Федотов',
            age: 20,
            city: 'Saratov',
            username: 'admin',
            currency: CurrencySchema.RUB,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
