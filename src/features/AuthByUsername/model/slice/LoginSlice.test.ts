import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { LoginActions, LoginReducer } from './LoginSlice'

describe('LoginSlice', () => {
    test('get username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' }
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('admin')))
            .toEqual({ username: 'admin' })
    })

    test('get password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' }
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123')))
            .toEqual({ password: '123' })
    })
})
