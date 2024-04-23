import { StateSchema } from '@/app/providers/StoreProvider'

export const getAddCommentForm = (state: StateSchema) =>
    state?.addComment?.comment ?? ''
export const getAddCommentFormError = (state: StateSchema) =>
    state?.addComment?.comment
