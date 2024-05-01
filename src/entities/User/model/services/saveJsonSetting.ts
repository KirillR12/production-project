import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { JsonSettings } from '../types/JsonSetting'
import { getAuthUser } from '../selector/getAuthUser/getAuthUser'
import { userSaveJsonSettings } from '../../api/userApi'
import { getJsonSetting } from '../selector/getJsonSettings'

export const SaveJsonSetting = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/SaveJsonSettings', async (newJsonSettins, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi

    const userData = getAuthUser(getState())
    const currentSetting = getJsonSetting(getState())

    if (!userData) {
        return rejectWithValue('error')
    }

    try {
        const responce = await dispatch(
            userSaveJsonSettings({
                userId: userData.id,
                jsonSettings: {
                    ...currentSetting,
                    ...newJsonSettins,
                },
            })
        ).unwrap()

        if (!responce.jsonSettings) {
            return rejectWithValue('error')
        }

        return responce.jsonSettings
    } catch (error) {
        return rejectWithValue('error')
    }
})
