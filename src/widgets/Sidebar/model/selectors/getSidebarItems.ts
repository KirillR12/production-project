import { createSelector } from '@reduxjs/toolkit'
import { getAuthUser } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import Home from 'shared/assets/icons/home.svg'
import List from 'shared/assets/icons/list.svg'
import User from 'shared/assets/icons/user.svg'
import Article from 'shared/assets/icons/article.svg'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getAuthUser,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
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
        ]

        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            )
        }

        return sidebarItemList
    },
)
