import './styles/index.scss'
import { NavBar, Sidebar } from 'widgets'
import { classNames } from 'shared'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProviders/lib/useTheme'

export function App() {
    const { theme } = useTheme()

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
