import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { ArticleRecommendsThunk } from '../servers/ArticleRecommendsThunk'
import { ArticleRecommendatiosSchema } from '../types/ArticleRecommendatiosSchema'

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
})

export const getArticleRecommends = recommendAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetaliPage?.recommendations || recommendAdapter.getInitialState(),
)

const ArticleRecommendatiosSlice = createSlice({
    name: 'ArticleRecommendatiosSlice',
    initialState: recommendAdapter.getInitialState<ArticleRecommendatiosSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ArticleRecommendsThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(ArticleRecommendsThunk.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false
                recommendAdapter.setAll(state, action.payload)
            })
            .addCase(ArticleRecommendsThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ArticleRecommendatiosActions } = ArticleRecommendatiosSlice
export const { reducer: ArticleRecommendatiosReducer } = ArticleRecommendatiosSlice
