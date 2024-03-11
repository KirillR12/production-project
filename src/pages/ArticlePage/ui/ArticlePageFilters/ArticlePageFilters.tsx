import { classNames } from 'shared'
import { memo, useCallback, useMemo } from 'react'
import {
    ArticleDataType,
    ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs'
import { ArticleTypeTab } from 'entities/Article/ui/ArticleTypeTab/ArticleTypeTab'
import styles from './styles.module.scss'
import {
    getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getArticlePageView,
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
    const type = useSelector(getArticlePageType)

    const fetchData = useCallback(() => {
        dispatch(ArticlePageThunk({ replace: true }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

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
        debounceFetchData()
    }, [dispatch, debounceFetchData])

    const onChangeType = useCallback((newType: TabsItem<ArticleDataType>) => {
        dispatch(ArticlePageActions.setType(newType.value))
        dispatch(ArticlePageActions.setPage(1))
        debounceFetchData()
    }, [dispatch, debounceFetchData])

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
            <ArticleTypeTab
                type={type}
                onChangeType={onChangeType}
                className={styles.tabs}
            />
        </div>
    )
})
