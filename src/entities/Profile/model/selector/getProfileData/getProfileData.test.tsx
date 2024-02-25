import { StateSchema } from 'app/providers/StoreProvider'
import { CurrencySchema } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
    test('success', () => {
        const data = {
            first: 'Кирилл',
            lastname: 'Федотов',
            age: 20,
            city: 'Saratov',
            username: 'admin',
            currency: CurrencySchema.RUB,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
