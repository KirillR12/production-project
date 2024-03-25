import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { UserRole } from '../types/UserSchema'

export const getUserRole = (state: StateSchema) => state?.user?.authUser?.roles

export const isUserAdmin = createSelector(getUserRole, (role) => Boolean(role?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(getUserRole, (role) => Boolean(role?.includes(UserRole.MANAGER)))
