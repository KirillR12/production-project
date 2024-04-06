import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { UserActions, User } from '@/entities/User'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage'

export interface LoginByUsernameProps {
    username: string,
    password: string
}

export const LoginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/LoginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.post<User>('/login', authData)
            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            dispatch(UserActions.setAuthUser(response.data))
            // extra.navigate('/')

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    },
)
