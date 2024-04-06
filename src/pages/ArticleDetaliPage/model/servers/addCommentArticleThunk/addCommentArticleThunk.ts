import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { CommentBlock } from '@/entities/CommentBlock'
import { getAuthUser } from '@/entities/User'
import { getArticleDetaliData } from '@/entities/Article'
import { ArticleCommentThunk } from '../ArticleCommentThunk/ArticleCommentThunk'

export const addCommentArticleThunk = createAsyncThunk<CommentBlock, string, ThunkConfig<string>>(
    'articleDetali/addCommentArticleThunk',
    async (text, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi

        const userId = getAuthUser(getState())
        const articleId = getArticleDetaliData(getState())

        if (!text || !userId || !articleId) {
            rejectWithValue('no date')
        }

        try {
            const response = await extra.api.post<CommentBlock>('/comments', {
                text,
                articleId: articleId?.id,
                userId: userId?.id,
            })
            if (!response.data) {
                throw new Error()
            }

            dispatch(ArticleCommentThunk(articleId?.id))

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    },
)
