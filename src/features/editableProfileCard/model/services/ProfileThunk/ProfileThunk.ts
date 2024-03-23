import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from 'entities/Profile'

export const ProfileThunk = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/ProfileThunk',
    async (profileId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    },
)
