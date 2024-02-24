import { getAuthUser } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'shared'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    const isAuth = useSelector(getAuthUser)

    const router = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (!isAuth && route.authOnly) {
            return false
        } return true
    }), [isAuth])

    return (
        <Routes>
            {
                router.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>

                        )}
                    />
                ))
            }
        </Routes>
    )
}

export default memo(AppRouter)
