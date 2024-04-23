import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/About'
import { AdminPanel } from '@/pages/AdminPanel'
import { ArticleDetaliPage } from '@/pages/ArticleDetaliPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlePage } from '@/pages/ArticlePage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/Main'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import {
    AppRouter,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticle,
    getRouteArticleCreate,
    getRouteArticleDetali,
    getRouteArticleEdit,
    getRouteForbiddenPage,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'
import { AppRouterProps } from '@/shared/types/router'

export const routeConfig: Record<AppRouter, AppRouterProps> = {
    [AppRouter.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRouter.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE]: {
        path: getRouteArticle(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRouter.ARTICLE_DETALI]: {
        path: getRouteArticleDetali(':id'),
        element: <ArticleDetaliPage />,
        authOnly: true,
    },
    [AppRouter.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanel />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRouter.FORBIDDEN_PAGE]: {
        path: getRouteForbiddenPage(),
        element: <ForbiddenPage />,
    },
    [AppRouter.NOTFOUNDPAGE]: {
        path: '*',
        element: <NotFoundPage />,
    },
}
