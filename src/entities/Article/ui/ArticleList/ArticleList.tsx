import { classNames } from 'shared'
import { memo } from 'react'
import styles from './styles.module.scss'
import { Article, ArticleView } from '../../model/types/ArticleType'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

 interface ArticleListProps {
   className?: string
   articles: Article[]
   isLoading?: boolean
   view: ArticleView
}

const getSkeleton = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((el, index) => (
        <ArticleListItemSkeleton
            className={styles.card}
            key={index}
            view={view}
        />
    ))

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={styles.card}
            key={article.id}
        />
    )

    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeleton(view)}
        </div>
    )
})
