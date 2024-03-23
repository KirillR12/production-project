import { CurrencySchema } from 'entities/Currency'
import { ValidateProfile } from './ValidateProfile'
import { ValidateProfileSchema } from '../../types/EditableProfileCardSchema'

const dataProfile = {
    first: 'Кирилл',
    lastname: 'Федотов',
    age: 20,
    currency: CurrencySchema.RUB,
    city: 'Saratov',
    username: 'admin',
}

describe('ValidateProfile', () => {
    test('success ', async () => {
        const result = ValidateProfile(dataProfile)
        expect(result).toEqual([])
    })

    test('error first and lastname', async () => {
        const result = ValidateProfile({ ...dataProfile, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileSchema.INCORRECT_USER_DATA])
    })

    test('error age', async () => {
        const result = ValidateProfile({ ...dataProfile, age: undefined })
        expect(result).toEqual([ValidateProfileSchema.INCORRECT_AGE])
    })

    test('error all', async () => {
        const result = ValidateProfile({})
        expect(result).toEqual([
            ValidateProfileSchema.INCORRECT_USER_DATA,
            ValidateProfileSchema.INCORRECT_AGE,
        ])
    })
})
