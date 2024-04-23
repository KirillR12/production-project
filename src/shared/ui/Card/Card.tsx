import { HTMLAttributes, ReactNode, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
    max?: boolean
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(styles.Card, { [styles.max]: max }, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    )
})
