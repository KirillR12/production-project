import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import {
    getArticlePageHasMore, getArticlePageIsLoading, getArticlePageLimit, getArticlePageNum,
} from '../../selectors/ArticlePageSelectors'
import { ArticlePageActions } from '../../slice/ArticlePageSlice'
import { ArticlePageThunk } from '../ArticlePageThunk/ArticlePageThunk'

export interface addCommentFormThunkProps {
    page?: number
}

export const ArticlePageNextThunk = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/ArticlePageNextThunk',
    async (_, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi

        const hasMore = getArticlePageHasMore(getState())
        const page = getArticlePageNum(getState())
        const isLoading = getArticlePageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(ArticlePageActions.setPage(page + 1))
            dispatch(ArticlePageThunk({
                page: page + 1,
            }))
        }
    },
)
