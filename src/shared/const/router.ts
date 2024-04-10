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

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticle = () => '/article'
export const getRouteArticleDetali = (id: string) => `/article/${id}`
export const getRouteArticleCreate = () => '/article/create'
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`
export const getRouteAdminPanel = () => '/admin'
export const getRouteForbiddenPage = () => '/forbidden'
