import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '../../types/ArticleType'

export const ArticleDetaliThunk = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetale/ArticleDetaliThunk',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            if (!articleId) {
                throw new Error()
            }
            const response = await extra.api.get<Article>(
                `/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user',
                    },
                }
            )
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)
