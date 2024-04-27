import { FeatureFlags } from '@/shared/types/featureFlags'

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
    features: FeatureFlags
}

export interface UserSchema {
    authUser?: User
    _inited: boolean
}
