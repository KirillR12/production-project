import { StateSchema } from '@/app/providers/StoreProvider'
import { getValidateErrors } from './getValidateErrors'
import { ValidateProfileSchema } from '../../consts/consts'

describe('getValidateErrors', () => {
    test('age error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileSchema.INCORRECT_AGE],
            },
        }
        expect(getValidateErrors(state as StateSchema)).toEqual([
            'INCORRECT_AGE',
        ])
    })

    test('data error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileSchema.INCORRECT_USER_DATA],
            },
        }
        expect(getValidateErrors(state as StateSchema)).toEqual([
            'INCORRECT_USER_DATA',
        ])
    })

    test('no data error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileSchema.NO_DATA],
            },
        }
        expect(getValidateErrors(state as StateSchema)).toEqual(['NO_DATA'])
    })

    test('server error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileSchema.SERVER_ERROR],
            },
        }
        expect(getValidateErrors(state as StateSchema)).toEqual([
            'SERVER_ERROR',
        ])
    })

    test('error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
