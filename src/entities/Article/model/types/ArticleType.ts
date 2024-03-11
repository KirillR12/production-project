import { User } from 'entities/User/model/types/UserSchema'

export enum ArticleSortField {
    VIEWS = 'VIEWS',
    TITLE = 'TITLE',
    CREATED = 'CREATED',
}

export enum ArticleBlock {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    CODE = 'CODE'
}

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

export enum ArticleDataType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export type ArticleBlockType = ArticlBlockImage | ArticlBlockText | ArticlBlockCode

export interface Article {
id: string,
title: string,
subtitle: string,
img: string,
user: User,
views: number,
createdAt: string,
type: ArticleDataType[],
blocks: ArticleBlockType[]
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}
