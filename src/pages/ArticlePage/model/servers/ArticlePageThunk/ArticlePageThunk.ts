import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlePageLimit } from '../../selectors/ArticlePageSelectors'

export interface addCommentFormThunkProps {
    page?: number
}

export const ArticlePageThunk = createAsyncThunk<Article[], addCommentFormThunkProps, ThunkConfig<string>>(
    'articlePage/ArticlePageThunk',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState,
        } = thunkApi

        const { page = 1 } = props
        const limit = getArticlePageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
