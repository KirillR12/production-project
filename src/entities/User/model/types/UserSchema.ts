export interface User {
username: string,
id: string
}

export interface UserSchema {
authUser?: User
_inited: boolean
}
