import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { SortOrder } from 'shared/types'
import styles from './styles.module.scss'
import { ArticleSortField } from '../../model/types/ArticleType'

 interface ArticleSortSelectorProps {
   className?: string
   sort: ArticleSortField
   order: SortOrder
   onChangeSort: (newSort: ArticleSortField) => void
   onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props

    const { t } = useTranslation('article')

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('По дате'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('По просмотрам'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('По названию'),
        },
    ], [t])

    return (
        <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать По')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('По')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})
