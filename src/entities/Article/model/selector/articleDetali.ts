import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetaliData = (state: StateSchema) =>
    state?.articleDetali?.data
export const getArticleDetaliIsLoading = (state: StateSchema) =>
    state?.articleDetali?.isLoading
export const getArticleDetaliError = (state: StateSchema) =>
    state?.articleDetali?.error
