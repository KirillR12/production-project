import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/pages/PageLoader'
import { RequireAuth } from './RequireAuth'
import { AppRouterProps } from '@/shared/types/router'
import { routeConfig } from '../../router/config/routeConfig'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
