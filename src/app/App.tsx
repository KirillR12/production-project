import './styles/index.scss'
import { classNames } from 'shared'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/RouterProvider'
import { useTheme } from './providers/ThemeProviders/lib/useTheme'
import { NavBar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export function App() {
    const { theme } = useTheme()
useEffect(() => {

    throw new Error()
}, [])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="contate-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
