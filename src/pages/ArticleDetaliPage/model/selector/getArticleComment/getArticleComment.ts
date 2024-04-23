import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleCommentIsLoading = (state: StateSchema) =>
    state?.articleDetaliPage?.comments?.isLoading
export const getArticleCommentError = (state: StateSchema) =>
    state?.articleDetaliPage?.comments?.error
