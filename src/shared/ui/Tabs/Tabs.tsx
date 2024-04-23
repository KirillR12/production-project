import { ReactNode, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { Card, CardTheme } from '../Card/Card'

export interface TabsItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: TabsItem<T>[]
    value: T
    onTabClick: (tab: TabsItem<T>) => void
    'data-testid'?: string
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        'data-testid': dataTestId = 'Tab',
    } = props

    const clickHandler = useCallback(
        (tab: TabsItem<T>) => () => {
            onTabClick(tab as TabsItem<T>)
        },
        [onTabClick]
    )

    return (
        <div
            data-testid={`${dataTestId}.Tab`}
            className={classNames(styles.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <Card
                    data-testid={`Tab.${tab.value}`}
                    theme={
                        value === tab.value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINE
                    }
                    key={tab.value}
                    className={styles.tab}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
