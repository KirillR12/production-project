import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentIsLoading = (state: StateSchema) => state?.articleComment?.isLoading
export const getArticleCommentError = (state: StateSchema) => state?.articleComment?.error
