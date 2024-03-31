import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetaliData } from '@/entities/Article'
import { getAuthUser } from '@/entities/User'

export const getArticle = createSelector(
    getAuthUser,
    getArticleDetaliData,
    (user, article) => {
        if (!user || !article) {
            return false
        }
        return article?.user?.id === user.id
    },
)
