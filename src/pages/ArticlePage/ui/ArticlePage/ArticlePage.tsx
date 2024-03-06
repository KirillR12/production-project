/* eslint-disable max-len */
import { classNames } from 'shared'
import { memo, useCallback } from 'react'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/ArticlePageSelectors'
import { ArticlePageActions, ArticlePageReducer, getSelectorsArticles } from '../../model/slice/ArticlePageSlice'
import styles from './styles.module.scss'
import { ArticlePageThunk } from '../../model/servers/ArticlePageThunk/ArticlePageThunk'

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
        dispatch(ArticlePageThunk())
        dispatch(ArticlePageActions.setInitView())
    })

    const onViewClick = useCallback((newView: ArticleView) => {
        dispatch(ArticlePageActions.setView(newView))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(styles.ArticlePage, {}, [className])}>
                <ArticleViewSelector
                    onViewClick={onViewClick}
                    view={view}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlePage)
