import { getAuthUser } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getAuthUser)
    const location = useLocation()

    if (!auth) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
}
