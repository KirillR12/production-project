import { classNames } from 'shared'
import { ReactNode, useCallback } from 'react'
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
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props

    const clickHandler = useCallback((tab) => () => {
        onTabClick(tab as TabsItem<T>)
    }, [onTabClick])

    return (
        <div className={classNames(styles.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
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
