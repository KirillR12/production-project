import { CountrySchema } from 'entities/Country'
import { CurrencySchema } from 'entities/Currency'

export enum ValidateProfileSchema {
INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
INCORRECT_AGE = 'INCORRECT_AGE',
NO_DATA = 'NO_DATA',
SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: CurrencySchema,
    country?: CountrySchema,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
data?: Profile,
form?: Profile,
isLoading: boolean,
error?: string,
readonly: boolean,
validateError?: ValidateProfileSchema[]
}
