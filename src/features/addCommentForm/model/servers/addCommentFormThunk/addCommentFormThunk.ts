import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { CommentBlock } from 'entities/CommentBlock'
import { getAuthUser } from 'entities/User'
import { getArticleDetaliData } from 'entities/Article/model/selector/articleDetali'
import { getAddCommentForm } from '../../selectors/getAddCommentForm'
import { addCommentFormActions } from '../../slice/addCommentFormSlice'

export interface addCommentFormThunkProps {}

export const addCommentFormThunk = createAsyncThunk<CommentBlock, void, ThunkConfig<string>>(
    'comment/addCommentFormThunk',
    async (_, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi

        const text = getAddCommentForm(getState())
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

            dispatch(addCommentFormActions.setText(''))

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    },
)
