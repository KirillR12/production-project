import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    comment: undefined,
    error: undefined,
}

export const addCommentFormSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.comment = action.payload
        },
    },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
