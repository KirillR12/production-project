import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/ProfileSchema'

export const ProfileThunk = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/ProfileThunk',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>('/profile')
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
