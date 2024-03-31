import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile } from '@/entities/Profile'
import { ProfileThunk } from '../services/ProfileThunk/ProfileThunk'
import { ProfileSaveEditThunk } from '../services/ProfileSaveEditThunk/ProfileSaveEditThunk'
import { ProfileCardSchema } from '../types/EditableProfileCardSchema'

const initialState: ProfileCardSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
}

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateError = undefined
        },
        saveEdit: (state) => {
            state.readonly = true
        },
        editProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ProfileThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(ProfileThunk.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
                state.validateError = undefined
            })
            .addCase(ProfileThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            .addCase(ProfileSaveEditThunk.pending, (state) => {
                state.validateError = undefined
                state.isLoading = true
            })
            .addCase(ProfileSaveEditThunk.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
                state.validateError = undefined
            })
            .addCase(ProfileSaveEditThunk.rejected, (state, action) => {
                state.isLoading = false
                state.validateError = action.payload
            })
    },
})

export const { actions: ProfileActions } = ProfileSlice
export const { reducer: ProfileReducer } = ProfileSlice
