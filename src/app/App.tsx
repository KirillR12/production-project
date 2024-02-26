import { classNames } from 'shared'
import { Suspense, useEffect } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'
import { useDispatch, useSelector } from 'react-redux'

import { UserActions, getUserInited } from 'entities/User'
import { AppRouter } from './providers/RouterProvider'

export function App() {
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(UserActions.setByUser())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
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
