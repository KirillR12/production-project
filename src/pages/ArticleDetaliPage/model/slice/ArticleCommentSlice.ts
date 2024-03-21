import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { CommentBlock } from 'entities/CommentBlock'
import { ArticleCommentSchema } from '../types/ArticleCommentSchema'
import { ArticleCommentThunk } from '../servers/ArticleCommentThunk/ArticleCommentThunk'

const commentAdapter = createEntityAdapter<CommentBlock>({
    selectId: (comment: CommentBlock) => comment.id,
})

export const getSelectorsComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetaliPage?.comments || commentAdapter.getInitialState(),
)

const ArticleCommentSlice = createSlice({
    name: 'CommentBlockSlice',
    initialState: commentAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ArticleCommentThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(ArticleCommentThunk.fulfilled, (
                state,
                action: PayloadAction<CommentBlock[]>,
            ) => {
                state.isLoading = false
                commentAdapter.setAll(state, action.payload)
            })
            .addCase(ArticleCommentThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ArticleCommentBlockActions } = ArticleCommentSlice
export const { reducer: ArticleCommentBlockReducer } = ArticleCommentSlice
