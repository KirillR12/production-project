import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import { User, UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
    authUser: {
        username: '',
        password: '',
    },
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthUser: ((state, action: PayloadAction<User>) => {
            state.authUser = action.payload
        }),
        setByUser: ((state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
            if (user) {
                state.authUser = (JSON.parse(user))
            }
        }),
        setLogOut: ((state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
            state.authUser = undefined
        }),
    },
})

export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice
