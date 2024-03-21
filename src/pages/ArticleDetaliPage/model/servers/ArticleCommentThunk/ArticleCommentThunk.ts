import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { CommentBlock } from 'entities/CommentBlock'

export const ArticleCommentThunk = createAsyncThunk<CommentBlock[], string | undefined, ThunkConfig<string>>(
    'ArticleDetali/ArticleCommentThunk',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        if (!articleId) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<CommentBlock[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
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
