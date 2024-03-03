import { classNames } from 'shared'
import { HTMLAttributes, ReactNode, memo } from 'react'
import styles from './styles.module.scss'

 interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string
   children: ReactNode
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(styles.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    )
})
