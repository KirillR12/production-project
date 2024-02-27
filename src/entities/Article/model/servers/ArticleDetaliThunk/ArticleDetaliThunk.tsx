import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../../types/ArticleType'

export const ArticleDetaliThunk = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetale/ArticleDetaliThunk',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    },
)
