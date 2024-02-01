import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {

}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
    },
})

export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice
