import { classNames } from 'shared'
import { memo, useCallback } from 'react'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Page } from 'widgets/Page'
import { initArticlePage } from 'pages/ArticlePage/model/servers/initArticlePage/initArticlePage'
import { ArticlePageNextThunk } from '../../model/servers/ArticlePageNextThunk/ArticlePageNextThunk'
import {
    getArticlePageIsLoading, getArticlePageView,
} from '../../model/selectors/ArticlePageSelectors'
import { ArticlePageReducer, getSelectorsArticles } from '../../model/slice/ArticlePageSlice'
import styles from './styles.module.scss'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'

 interface ArticlePageProps {
   className?: string
}

const reducer: ReducerList = {
    articlePage: ArticlePageReducer,
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const isLoading = useSelector(getArticlePageIsLoading)
    const articles = useSelector(getSelectorsArticles.selectAll)
    const view = useSelector(getArticlePageView)

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(initArticlePage())
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(ArticlePageNextThunk())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlePage, {}, [className])}
            >
                <ArticlePageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={styles.list}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlePage)
