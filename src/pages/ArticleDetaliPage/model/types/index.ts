import { ArticleCommentSchema } from './ArticleCommentSchema'
import { ArticleRecommendatiosSchema } from './ArticleRecommendatiosSchema'

export interface ArticleDetaliPageSchema {
    comments: ArticleCommentSchema
    recommendations: ArticleRecommendatiosSchema
}
