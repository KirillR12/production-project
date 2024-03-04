import { AboutPage } from 'pages/About'
import { ArticleDetaliPage } from 'pages/ArticleDetaliPage'
import { ArticlePage } from 'pages/ArticlePage'
import { MainPage } from 'pages/Main'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRouterProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUNDPAGE = 'notFoundPage',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETALI = 'article_detale'
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.PROFILE]: '/profile/', // + id
    [AppRouter.ARTICLE]: '/article',
    [AppRouter.ARTICLE_DETALI]: '/article/', // + id
    [AppRouter.NOTFOUNDPAGE]: '*',
}

export const routeConfig: Record<AppRouter, AppRouterProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRouter.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE_DETALI]: {
        path: `${RoutePath.article_detale}:id`,
        element: <ArticleDetaliPage />,
        authOnly: true,
    },
    [AppRouter.NOTFOUNDPAGE]: {
        path: RoutePath.notFoundPage,
        element: <NotFoundPage />,
    },

}
