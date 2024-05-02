import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Sidebar } from '@/widgets/Sidebar'
import { Navbar } from '@/widgets/Navbar'

import { getUserInited, initAuthData } from '@/entities/User'
import { AppRouter } from './providers/RouterProvider'
import { Loader } from '@/shared/ui/Loader'
import { useTheme } from './providers/ThemeProviders'

export function App() {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!inited) {
        return <Loader />
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="contate-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
