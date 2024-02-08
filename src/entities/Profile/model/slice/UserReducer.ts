import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/ProfileSchema'

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
}

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
})

export const { actions: ProfileActions } = ProfileSlice
export const { reducer: ProfileReducer } = ProfileSlice
