import { CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './styles.module.scss'

 interface SkeletonProps {
   className?: string
   width?: string | number
   height?: string | number
   border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        border,
    } = props

    const stylesProps: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }

    return (
        <div
            style={stylesProps}
            className={classNames(styles.Skeleton, {}, [className])}
        />
    )
})
