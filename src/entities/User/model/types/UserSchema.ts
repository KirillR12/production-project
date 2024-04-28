import { FeatureFlags } from '@/shared/types/featureFlags'
import { JsonSetting } from './JsonSetting'

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface User {
    username: string
    id: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
    jsonSetting?: JsonSetting
}

export interface UserSchema {
    authUser?: User
    _inited: boolean
}
