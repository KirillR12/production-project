import { StateSchema } from '@/app/providers/StoreProvider'
import { CurrencySchema } from '@/entities/Currency'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
    test('succes', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual('error')
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
