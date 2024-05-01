import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage'
import { User, UserSchema } from '../types/UserSchema'
import { setFeatureFlags } from '@/shared/features/setGetFeatures'
import { SaveJsonSetting } from '../services/saveJsonSetting'
import { JsonSettings } from '../types/JsonSetting'

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
        },
        setByUser: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
            if (user) {
                const json = JSON.parse(user) as User
                state.authUser = json
                setFeatureFlags(json.features)
            }
            state._inited = true
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
    },
})

export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice
