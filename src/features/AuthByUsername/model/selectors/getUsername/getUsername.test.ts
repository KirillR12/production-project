import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getUsername } from './getUsername'

describe('getUsername', () => {
    test('username', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'admin' },
        }
        expect(getUsername(state as StateSchema)).toEqual('admin')
    })

    test('username', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getUsername(state as StateSchema)).toEqual('')
    })
})
