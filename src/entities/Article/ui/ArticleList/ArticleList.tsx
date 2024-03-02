import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import styles from './styles.module.scss'
import { Article, ArticleView } from '../../model/types/ArticleType'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

 interface ArticleListProps {
   className?: string
   articles: Article[]
   isLoading?: boolean
   view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation()

    const {
        className,
        articles,
        isLoading,
        view,
    } = props

    const renderArticle = (article: Article) => (
        <ArticleListItem />
    )

    return (
        <div className={classNames(styles.ArticleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    )
})
