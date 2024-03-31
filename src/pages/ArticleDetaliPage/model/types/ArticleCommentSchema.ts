import { EntityState } from '@reduxjs/toolkit'
import { CommentBlock } from '@/entities/CommentBlock'

export interface ArticleCommentSchema extends EntityState<CommentBlock> {
    isLoading: boolean
    error?: string
}
