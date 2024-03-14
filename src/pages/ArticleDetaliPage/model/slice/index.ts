import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetaliPageSchema } from '../types'
import { ArticleRecommendatiosReducer } from './ArticleRecommendatiosSlice'
import { ArticleCommentBlockReducer } from './ArticleCommentSlice'

export const articleDetaliReducer = combineReducers<ArticleDetaliPageSchema>({
    comments: ArticleCommentBlockReducer,
    recommendations: ArticleRecommendatiosReducer,
})
