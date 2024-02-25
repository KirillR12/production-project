import { StateSchema } from 'app/providers/StoreProvider'

export const getAuthUser = (state: StateSchema) => state?.user?.authUser
