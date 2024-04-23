import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Article } from '../../types/ArticleType'
import { ArticleDetaliThunk } from '../../servers/ArticleDetaliThunk/ArticleDetaliThunk'
import { ArticleSchema } from '../../types/ArticleSchema'

const initialState: ArticleSchema = {
    data: {
        id: '',
    },
    error: undefined,
    isLoading: false,
}

export const ArticleDetaliSlice = createSlice({
    name: 'ArticleDetali',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ArticleDetaliThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                ArticleDetaliThunk.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false
                    state.data = action.payload
                }
            )
            .addCase(ArticleDetaliThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ArticleDetaliActions } = ArticleDetaliSlice
export const { reducer: ArticleDetaliReducer } = ArticleDetaliSlice
