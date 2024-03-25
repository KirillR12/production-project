import { UserRole } from 'entities/User/model/types/UserSchema'
import { AboutPage } from 'pages/About'
import AdminPanel from 'pages/AdminPanel/ui/AdminPanel/AdminPanel'
import { ArticleDetaliPage } from 'pages/ArticleDetaliPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlePage } from 'pages/ArticlePage'
import { ForbiddenPage } from 'pages/ForbiddenPage'
import { MainPage } from 'pages/Main'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRouterProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUNDPAGE = 'notFoundPage',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETALI = 'article_detale',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN_PAGE = 'forbidden_page'
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.PROFILE]: '/profile/', // + id
    [AppRouter.ARTICLE]: '/article',
    [AppRouter.ARTICLE_DETALI]: '/article/', // + id
    [AppRouter.ARTICLE_CREATE]: '/article/create', // + id
    [AppRouter.ARTICLE_EDIT]: '/article/:id/edit', // + id
    [AppRouter.ADMIN_PANEL]: '/admin',
    [AppRouter.FORBIDDEN_PAGE]: '/forbidden',
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
    [AppRouter.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE_DETALI]: {
        path: `${RoutePath.article_detale}:id`,
        element: <ArticleDetaliPage />,
        authOnly: true,
    },
    [AppRouter.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanel />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRouter.FORBIDDEN_PAGE]: {
        path: RoutePath.forbidden_page,
        element: <ForbiddenPage />,
    },
    [AppRouter.NOTFOUNDPAGE]: {
        path: RoutePath.notFoundPage,
        element: <NotFoundPage />,
    },

}
