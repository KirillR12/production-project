export { useJsonSettings } from './model/selector/getJsonSettings'
export { SaveJsonSetting } from './model/services/saveJsonSetting'
export {
    getUserRole,
    isUserAdmin,
    isUserManager,
} from './model/selector/getUserRole'
export { getUserInited } from './model/selector/getUserInited/getUserInited'
export { getAuthUser } from './model/selector/getAuthUser/getAuthUser'
export { UserActions, UserReducer } from './model/slice/UserReducer'
export type { UserSchema, User } from './model/types/UserSchema'
export { UserRole } from './model/types/UserSchema'
