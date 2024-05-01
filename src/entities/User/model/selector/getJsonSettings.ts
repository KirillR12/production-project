import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/store'
import { JsonSettings } from '../types/JsonSetting'

const defaultSetting: JsonSettings = {}

export const [useJsonSettings, getJsonSetting] = buildSelector(
    (state: StateSchema) =>
        state?.user?.authUser?.jsonSettings ?? defaultSetting
)
