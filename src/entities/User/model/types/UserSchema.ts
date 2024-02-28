export interface User {
username: string
id: string
avatar?: string
}

export interface UserSchema {
authUser?: User
_inited: boolean
}
