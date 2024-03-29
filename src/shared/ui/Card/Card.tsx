import { classNames } from 'shared/lib/classNames/classNames'
import { HTMLAttributes, ReactNode, memo } from 'react'
import styles from './styles.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
OUTLINE = 'outline'
}

 interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string
   children: ReactNode
   theme?: CardTheme
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(styles.Card, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    )
})
