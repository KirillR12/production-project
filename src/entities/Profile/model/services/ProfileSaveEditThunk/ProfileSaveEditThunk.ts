import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/ProfileSchema'
import { getProfileForm } from '../../selector/getProfileForm/getProfileForm'

export const ProfileSaveEditThunk = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/ProfileSaveEditThunk',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    },
)
