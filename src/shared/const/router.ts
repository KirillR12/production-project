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
