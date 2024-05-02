import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage'
import { User, UserSchema } from '../types/UserSchema'
import { setFeatureFlags } from '@/shared/features/setGetFeatures'
import { SaveJsonSetting } from '../services/saveJsonSetting'
import { JsonSettings } from '../types/JsonSetting'
import { initAuthData } from '../services/getUserData'

const initialState: UserSchema = {
    _inited: false,
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User>) => {
            state.authUser = action.payload
            setFeatureFlags(action.payload.features)
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id)
        },
        setLogOut: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
            state.authUser = undefined
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            SaveJsonSetting.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authUser) {
                    state.authUser.jsonSettings = action.payload
                }
            }
        )
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authUser = payload
                setFeatureFlags(payload.features)
                state._inited = true
            }
        )
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true
        })
    },
})

export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice
