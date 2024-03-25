import {
    Suspense, memo, useCallback,
} from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'shared'
import { AppRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter)
