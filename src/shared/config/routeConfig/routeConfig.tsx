import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/Main'
import { RouteProps } from 'react-router-dom'

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '',
    [AppRouter.ABOUT]: 'AboutPage',
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
}
