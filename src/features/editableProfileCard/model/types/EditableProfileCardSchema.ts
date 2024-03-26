import { Profile } from 'entities/Profile'
import { ValidateProfileSchema } from '../consts/consts'

export interface ProfileCardSchema {
data?: Profile,
form?: Profile,
isLoading: boolean,
error?: string,
readonly: boolean,
validateError?: ValidateProfileSchema[]
}
