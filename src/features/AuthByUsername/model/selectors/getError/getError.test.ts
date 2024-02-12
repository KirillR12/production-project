import { StateSchema } from 'app/providers/StoreProvider'
import { getError } from './getError'

describe('getError', () => {
    test('error', () => {
        const state: DeepPartial<StateSchema> = {
            login: { error: 'error' },
        }
        expect(getError(state as StateSchema)).toEqual('error')
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getError(state as StateSchema)).toEqual('')
    })
})
