export enum UserRole {
    ADMIN = 'ADMIN',
    USER ='USER',
    MANAGER = 'MANAGER'
}

export interface User {
username: string
id: string
avatar?: string
roles?: UserRole[]
}

export interface UserSchema {
authUser?: User
_inited: boolean
}
