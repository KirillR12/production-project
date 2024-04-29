import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/store'
import { JsonSetting } from '../types/JsonSetting'

export const [getJsonSettings, jsonSetting] = buildSelector(
    (state: StateSchema, key: keyof JsonSetting) =>
        state?.user?.authUser?.jsonSetting?.[key]
)
