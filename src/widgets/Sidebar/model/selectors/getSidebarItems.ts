import { createSelector } from '@reduxjs/toolkit'
import { getAuthUser } from '@/entities/User'
import Home from '@/shared/assets/icons/home.svg'
import List from '@/shared/assets/icons/list.svg'
import User from '@/shared/assets/icons/user.svg'
import Article from '@/shared/assets/icons/article.svg'
import { SidebarItemType } from '../types/sidebar'
import {
    getRouteAbout, getRouteArticle, getRouteMain, getRouteProfile,
} from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getAuthUser,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
                Icon: Home,
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                Icon: List,
            },
        ]

        if (userData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: User,
                    authOnly: true,
                },
                {
                    path: getRouteArticle(),
                    text: 'Статьи',
                    Icon: Article,
                    authOnly: true,
                },
            )
        }

        return sidebarItemList
    },
)
