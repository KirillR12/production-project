import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { UserRole } from '@/entities/User/model/types/UserSchema'
import { getAuthUser, getUserRole } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getAuthUser)
    const location = useLocation()
    const userRole = useSelector(getUserRole)

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles?.some((requireRole) => {
            const hasRole = userRole?.includes(requireRole)
            return hasRole
        })
    }, [roles, userRole])

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden_page} state={{ from: location }} replace />
    }

    return children
}
