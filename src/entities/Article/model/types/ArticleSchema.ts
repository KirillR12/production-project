import { Article } from './ArticleType'

export interface ArticleSchema {
    data: Article
    isLoading?: boolean
    error?: string
}
