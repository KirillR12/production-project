import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleRecommendsIsLoading = (state: StateSchema) => state?.articleDetaliPage?.recommendations?.isLoading
export const getArticleRecommendsError = (state: StateSchema) => state?.articleDetaliPage?.recommendations?.error
