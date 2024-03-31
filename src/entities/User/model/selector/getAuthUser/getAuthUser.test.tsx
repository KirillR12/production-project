import { StateSchema } from '@/app/providers/StoreProvider'
import { getAuthUser } from './getAuthUser'

const authData = {
    username: 'kirill',
    id: '1',
}

describe('getAuthUser', () => {
    test('succes', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authUser: authData,
            },
        }
        expect(getAuthUser(state as StateSchema)).toEqual(authData)
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAuthUser(state as StateSchema)).toEqual(undefined)
    })
})
