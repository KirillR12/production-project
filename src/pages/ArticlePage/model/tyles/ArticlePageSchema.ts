import { EntityState } from '@reduxjs/toolkit'
import {
    Article, ArticleDataType, ArticleSortField, ArticleView,
} from 'entities/Article'
import { SortOrder } from 'shared/types'

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading: boolean
    error?: string

    view: ArticleView

    page: number
    limit: number
    hasMore: boolean

order: SortOrder
sort: ArticleSortField

search: string

type: ArticleDataType

    _inited: boolean
}
