import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleRecommendsIsLoading = (state: StateSchema) => state?.articleRecommends?.isLoading
export const getArticleRecommendsError = (state: StateSchema) => state?.articleRecommends?.error
