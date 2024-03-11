import { classNames } from 'shared'
import { memo, useCallback } from 'react'
import {
    ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import styles from './styles.module.scss'
import {
    getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageView,
} from '../../model/selectors/ArticlePageSelectors'
import { ArticlePageActions } from '../../model/slice/ArticlePageSlice'
import { ArticlePageThunk } from '../../model/servers/ArticlePageThunk/ArticlePageThunk'

 interface ArticlePageFiltersProps {
   className?: string
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const {
        className,
    } = props

    const { t } = useTranslation()

    const view = useSelector(getArticlePageView)

    const dispatch = useAppDispatch()

    const order = useSelector(getArticlePageOrder)
    const sort = useSelector(getArticlePageSort)
    const search = useSelector(getArticlePageSearch)

    const fetchData = useCallback(() => {
        dispatch(ArticlePageThunk({ replace: true }))
    }, [dispatch])

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(ArticlePageActions.setView(newView))
        dispatch(ArticlePageActions.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(ArticlePageActions.setSort(newSort))
        dispatch(ArticlePageActions.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(ArticlePageActions.setOrder(newOrder))
        dispatch(ArticlePageActions.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(ArticlePageActions.setSearch(newSearch))
        dispatch(ArticlePageActions.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    return (
        <div className={classNames(styles.ArticlePageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}

                />
                <ArticleViewSelector
                    onViewClick={onChangeView}
                    view={view}
                />
            </div>
            <Card className={styles.search}>
                <Input
                    label={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
        </div>
    )
})
