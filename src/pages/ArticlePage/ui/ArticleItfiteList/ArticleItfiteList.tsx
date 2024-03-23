import { memo } from 'react'
import { ArticleList } from 'entities/Article'
import { useSelector } from 'react-redux'
import { getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/ArticlePageSelectors'
import { getSelectorsArticles } from '../../model/slice/ArticlePageSlice'

 interface ArticleItfiteListProps {
   className?: string
}

export const ArticleItfiteList = memo((props: ArticleItfiteListProps) => {
    const {
        className,
    } = props

    const isLoading = useSelector(getArticlePageIsLoading)
    const articles = useSelector(getSelectorsArticles.selectAll)
    const view = useSelector(getArticlePageView)

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    )
})
