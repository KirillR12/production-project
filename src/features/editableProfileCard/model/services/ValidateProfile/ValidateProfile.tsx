import { Profile } from 'entities/Profile'
import { ValidateProfileSchema } from '../../types/EditableProfileCardSchema'

export const ValidateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileSchema.NO_DATA]
    }

    const { first, lastname, age } = profile
    const errors: ValidateProfileSchema[] = []

    if (!first || !lastname) {
        errors.push(ValidateProfileSchema.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileSchema.INCORRECT_AGE)
    }

    return errors
}
