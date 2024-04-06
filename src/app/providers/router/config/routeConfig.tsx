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
import { AppRouter, RoutePath } from '@/shared/const/router'
import { AppRouterProps } from '@/shared/types/router'

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
