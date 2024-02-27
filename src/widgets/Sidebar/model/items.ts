import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import Home from 'shared/assets/icons/home.svg'
import List from 'shared/assets/icons/list.svg'
import User from 'shared/assets/icons/user.svg'
import Article from 'shared/assets/icons/article.svg'

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: Home,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: List,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: User,
        authOnly: true,
    },
    {
        path: RoutePath.article,
        text: 'Статьи',
        Icon: Article,
        authOnly: true,
    },
]
