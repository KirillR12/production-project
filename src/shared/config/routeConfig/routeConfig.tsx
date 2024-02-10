import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/Main'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUNDPAGE = 'notFoundPage',
    PROFILE = 'profile'
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '',
    [AppRouter.ABOUT]: 'about',
    [AppRouter.PROFILE]: 'profile',
    [AppRouter.NOTFOUNDPAGE]: '*',
}

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRouter.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRouter.NOTFOUNDPAGE]: {
        path: RoutePath.notFoundPage,
        element: <NotFoundPage />,
    },

}
