import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArticleDataType, ArticleSortField } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'
import { getArticlePageInited } from '../../selectors/ArticlePageSelectors'
import { ArticlePageActions } from '../../slice/ArticlePageSlice'
import { ArticlePageThunk } from '../ArticlePageThunk/ArticlePageThunk'

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (searchParams, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi

        const sortFromUrl = searchParams.get('sort') as ArticleSortField
        const orderFromUrl = searchParams.get('order') as SortOrder
        const searchFromUrl = searchParams.get('search')
        const typeFromUrl = searchParams.get('type') as ArticleDataType

        if (sortFromUrl) {
            dispatch(ArticlePageActions.setSort(sortFromUrl))
        }
        if (orderFromUrl) {
            dispatch(ArticlePageActions.setOrder(orderFromUrl))
        }
        if (searchFromUrl) {
            dispatch(ArticlePageActions.setSearch(searchFromUrl))
        }
        if (typeFromUrl) {
            dispatch(ArticlePageActions.setType(typeFromUrl))
        }

        const inited = getArticlePageInited(getState())
        if (!inited) {
            dispatch(ArticlePageActions.setInitView())
            dispatch(ArticlePageThunk({}))
        }
    },
)
