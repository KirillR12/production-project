import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import styles from './styles.module.scss'
import { Article } from '../../model/types/ArticleType'
import { ArticleView } from '../../model/consts/consts'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

 interface ArticleListProps {
   className?: string
   articles: Article[]
   isLoading?: boolean
   view: ArticleView
   target?: HTMLAttributeAnchorTarget
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
    const { t } = useTranslation()

    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={styles.card}
            key={article.id}
            target={target}
        />
    )

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                <Text
                    size={TextSize.L}
                    title={t('Статьи не найдены')}
                />
            </div>
        )
    }

    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeleton(view)}
        </div>
    )
})
