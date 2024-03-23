import { Profile } from 'entities/Profile'

export enum ValidateProfileSchema {
INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
INCORRECT_AGE = 'INCORRECT_AGE',
NO_DATA = 'NO_DATA',
SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileCardSchema {
data?: Profile,
form?: Profile,
isLoading: boolean,
error?: string,
readonly: boolean,
validateError?: ValidateProfileSchema[]
}
