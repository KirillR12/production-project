import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleDataType } from 'entities/Article'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import {
    getArticlePageLimit, getArticlePageNum, getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType,
} from '../../selectors/ArticlePageSelectors'

interface ArticlePageThunkProps {
replace?: boolean
}

export const ArticlePageThunk = createAsyncThunk<Article[], ArticlePageThunkProps, ThunkConfig<string>>(
    'articlePage/ArticlePageThunk',
    async (_, thunkApi) => {
        const {
            extra, rejectWithValue, getState,
        } = thunkApi

        const page = getArticlePageNum(getState())
        const limit = getArticlePageLimit(getState())
        const order = getArticlePageOrder(getState())
        const sort = getArticlePageSort(getState())
        const search = getArticlePageSearch(getState())
        const type = getArticlePageType(getState())

        try {
            addQueryParams({
                sort, order, search, type,
            })
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    q: search,
                    type: type === ArticleDataType.ALL ? undefined : type,
                },
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    },
)
