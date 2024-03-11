import { memo, useMemo } from 'react'
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs'
import { classNames } from 'shared'
import { ArticleDataType } from '../../model/types/ArticleType'

 interface ArticleTypeTabProps {
   className?: string
   type: ArticleDataType
   onChangeType: (newType: TabsItem<ArticleDataType>) => void
}

export const ArticleTypeTab = memo((props: ArticleTypeTabProps) => {
    const {
        className,
        type,
        onChangeType,
    } = props

    const typeTabs = useMemo<TabsItem<ArticleDataType>[]>(() => [
        {
            value: ArticleDataType.ALL,
            content: 'Все статьи',
        },
        {
            value: ArticleDataType.ECONOMICS,
            content: 'Экономика',
        },
        {
            value: ArticleDataType.IT,
            content: 'Айти',
        },
        {
            value: ArticleDataType.SCIENCE,
            content: 'Наука',
        },
    ], [])

    return (
        <Tabs
            value={type}
            tabs={typeTabs}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    )
})
