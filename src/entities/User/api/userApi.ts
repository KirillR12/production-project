import { rtkApi } from '@/shared/api/rtkApi'
import { JsonSettings } from '../model/types/JsonSetting'
import { User } from '../model/types/UserSchema'

interface setJsonSetting {
    userId: string
    jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        saveJsonSetting: build.mutation<User, setJsonSetting>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
})

export const userSaveJsonSettings = userApi.endpoints.saveJsonSetting.initiate
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate
