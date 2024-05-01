import { FeatureFlags } from '@/shared/types/featureFlags'
import { JsonSettings } from './JsonSetting'

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
    jsonSettings?: JsonSettings
}

export interface UserSchema {
    authUser?: User
    _inited: boolean
}
