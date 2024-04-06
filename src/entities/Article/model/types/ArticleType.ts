import { User } from '@/entities/User'
import { ArticleBlock, ArticleDataType } from '../consts/consts'

export interface ArticlBlock {
    id: string
    type: ArticleBlock
}

export interface ArticlBlockImage extends ArticlBlock {
    type: ArticleBlock.IMAGE
    src: string
    title: string
}

export interface ArticlBlockText extends ArticlBlock {
    type: ArticleBlock.TEXT
    title: string
    paragraphs: string[]
}

export interface ArticlBlockCode extends ArticlBlock {
    type: ArticleBlock.CODE
    code: string
}

export type ArticleBlockType = ArticlBlockImage | ArticlBlockText | ArticlBlockCode

export interface Article {
id: string,
title?: string,
subtitle?: string,
img?: string,
user?: User,
views?: number,
createdAt?: string,
type?: ArticleDataType[],
blocks?: ArticleBlockType[]
}
