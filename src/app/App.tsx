import './styles/index.scss'
import { classNames } from 'shared'
import { Suspense } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'
import { Modal } from 'shared/ui/Modal/Modal'
import { AppRouter } from './providers/RouterProvider'
import { useTheme } from './providers/ThemeProviders/lib/useTheme'

export function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Modal />
                <div className="contate-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
