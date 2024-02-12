import { StateSchema } from 'app/providers/StoreProvider'
import { getPassword } from './getPassword'

describe('getPassword', () => {
    test('password', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: '123' },
        }
        expect(getPassword(state as StateSchema)).toEqual('123')
    })

    test('password', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getPassword(state as StateSchema)).toEqual('')
    })
})
