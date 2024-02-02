import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserActions } from 'entities/User'
import { User } from 'entities/User/types/UserSchema'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'

export interface LoginByUsernameProps {
    username: string,
    password: string
}

export const LoginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string}>(
    'login/LoginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(UserActions.setAuthUser(response.data))

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('error')
        }
    },
)
