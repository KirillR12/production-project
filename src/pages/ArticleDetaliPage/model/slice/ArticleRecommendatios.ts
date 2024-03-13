import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { CommentBlock } from 'entities/CommentBlock'
import { Article } from 'entities/Article'
import { ArticleCommentSchema } from '../types/ArticleCommentSchema'
import { ArticleCommentThunk } from '../servers/ArticleCommentThunk'

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
})

export const getArticleRecommends = recommendAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommends || recommendAdapter.getInitialState(),
)

const ArticleRecommendatios = createSlice({
    name: 'ArticleRecommendatios',
    initialState: recommendAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(ArticleCommentThunk.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(ArticleCommentThunk.fulfilled, (
    //             state,
    //             action: PayloadAction<CommentBlock[]>,
    //         ) => {
    //             state.isLoading = false
    //             recommendAdapter.setAll(state, action.payload)
    //         })
    //         .addCase(ArticleCommentThunk.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // },
})

export const { actions: ArticleRecommendatiosActions } = ArticleRecommendatios
export const { reducer: ArticleRecommendatiosReducer } = ArticleRecommendatios
