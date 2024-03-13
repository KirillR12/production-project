import { EntityState } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'

export interface ArticleRecommendatiosSchema extends EntityState<Article> {
    isLoading: boolean
    error?: string
}
