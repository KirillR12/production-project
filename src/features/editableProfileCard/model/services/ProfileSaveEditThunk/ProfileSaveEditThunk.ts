import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Profile } from '@/entities/Profile'
import { getProfileForm } from '../../selector/getProfileForm/getProfileForm'
import { ValidateProfile } from '../ValidateProfile/ValidateProfile'
import { ValidateProfileSchema } from '../../consts/consts'

export const ProfileSaveEditThunk = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileSchema[]>>(
    'profile/ProfileSaveEditThunk',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const formData = getProfileForm(getState())

        const validateFormData = ValidateProfile(formData)

        if (validateFormData.length) {
            return rejectWithValue(validateFormData)
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return rejectWithValue([ValidateProfileSchema.SERVER_ERROR])
        }
    },
)
