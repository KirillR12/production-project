import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/ProfileSchema'
import { ProfileThunk } from '../services/ProfileThunk/ProfileThunk'

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
    extraReducers: (builder) => {
        builder
            .addCase(ProfileThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(ProfileThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(ProfileThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ProfileActions } = ProfileSlice
export const { reducer: ProfileReducer } = ProfileSlice
