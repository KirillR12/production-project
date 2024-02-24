import { CountrySchema } from 'entities/Country'
import { CurrencySchema } from 'entities/Currency'

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
readonly: boolean
}
