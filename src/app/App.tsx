import './styles/index.scss'
import { NavBar, Sidebar } from 'widgets'
import { classNames } from 'shared'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProviders/lib/useTheme'

export function App() {
    const { theme } = useTheme()

    const [t] = useTranslation()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="contate-page">
                    <Sidebar />
                    <h1>{t('Hello')}</h1>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
