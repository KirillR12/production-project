import { StateSchema } from 'app/providers/StoreProvider'
import { getIsLoading } from './getIsLoading'

describe('getIsLoading', () => {
    test('isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        }
        expect(getIsLoading(state as StateSchema)).toEqual(true)
    })

    test('isLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getIsLoading(state as StateSchema)).toEqual(false)
    })
})
