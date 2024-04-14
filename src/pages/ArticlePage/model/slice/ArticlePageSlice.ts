import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import {
    Article, ArticleDataType, ArticleSortField, ArticleView,
} from '@/entities/Article'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage'
import { SortOrder } from '@/shared/types/sort'
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
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        limit: 1,
        type: ArticleDataType.ALL,
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
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setType: (state, action: PayloadAction<ArticleDataType>) => {
            state.type = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ArticlePageThunk.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true

                if (action.meta.arg.replace) {
                    articlePageAdapter.removeAll(state)
                }
            })
            .addCase(ArticlePageThunk.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= state.limit

                if (action.meta.arg.replace) {
                    articlePageAdapter.setAll(state, action.payload)
                } else {
                    articlePageAdapter.addMany(state, action.payload)
                }
            })
            .addCase(ArticlePageThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ArticlePageActions } = ArticlePageSlice
export const { reducer: ArticlePageReducer } = ArticlePageSlice
