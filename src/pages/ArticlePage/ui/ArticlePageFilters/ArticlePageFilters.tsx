import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { ArticleDataType, ArticleSortField, ArticleView } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { SortOrder } from '@/shared/types/sort'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { TabsItem } from '@/shared/ui/Tabs'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ArticlePageThunk } from '../../model/servers/ArticlePageThunk/ArticlePageThunk'
import styles from './styles.module.scss'
import {
    getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getArticlePageView,
} from '../../model/selectors/ArticlePageSelectors'
import { ArticlePageActions } from '../../model/slice/ArticlePageSlice'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { ArticleTypeTab } from '@/features/ArticleTypeTab'

export const ArticlePageFilters = memo(() => {
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
        <VStack gap="16" max>
            <HStack justify="between" max>
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
            </HStack>
            <Card className={styles.input}>
                <Input
                    label={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTab
                type={type}
                onChangeType={onChangeType}
            />
        </VStack>
    )
})
