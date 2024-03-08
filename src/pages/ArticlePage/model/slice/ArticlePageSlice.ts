import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import { ArticlePageSchema } from '../tyles/ArticlePageSchema'
import { ArticlePageThunk } from '../servers/ArticlePageThunk/ArticlePageThunk'

const articlePageAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
})

export const getSelectorsArticles = articlePageAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlePageAdapter.getInitialState(),
)

const ArticlePageSlice = createSlice({
    name: 'ArticlePageSlice',
    initialState: articlePageAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setInitView: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
            state._inited = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ArticlePageThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(ArticlePageThunk.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false
                articlePageAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(ArticlePageThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ArticlePageActions } = ArticlePageSlice
export const { reducer: ArticlePageReducer } = ArticlePageSlice
