import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { LoginByUsername } from '../services/LoginByUsername/LoginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(LoginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: LoginActions } = LoginSlice
export const { reducer: LoginReducer } = LoginSlice
