import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlePageInited } from '../../selectors/ArticlePageSelectors'
import { ArticlePageActions } from '../../slice/ArticlePageSlice'
import { ArticlePageThunk } from '../ArticlePageThunk/ArticlePageThunk'

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (_, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi

        const inited = getArticlePageInited(getState())
        if (!inited) {
            dispatch(ArticlePageActions.setInitView())
            dispatch(ArticlePageThunk({}))
        }
    },
)
