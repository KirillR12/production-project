import { CountrySchema } from '@/entities/Country'
import { CurrencySchema } from '@/entities/Currency'

export interface Profile {
    id?: string
    first?: string,
    lastname?: string,
    age?: number,
    currency?: CurrencySchema,
    country?: CountrySchema,
    city?: string,
    username?: string,
    avatar?: string
}
