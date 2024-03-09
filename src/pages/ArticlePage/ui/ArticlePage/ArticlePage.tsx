/* eslint-disable max-len */
import { classNames } from 'shared'
import { memo, useCallback } from 'react'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
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
import { ArticlePageActions, ArticlePageReducer, getSelectorsArticles } from '../../model/slice/ArticlePageSlice'
import styles from './styles.module.scss'

 interface ArticlePageProps {
   className?: string
}

const reducer: ReducerList = {
    articlePage: ArticlePageReducer,
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const articles = useSelector(getSelectorsArticles.selectAll)

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(initArticlePage())
    })

    const onViewClick = useCallback((newView: ArticleView) => {
        dispatch(ArticlePageActions.setView(newView))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(ArticlePageNextThunk())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector
                    onViewClick={onViewClick}
                    view={view}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlePage)
