import { CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'

 interface AvatarProps {
   className?: string
   src?: string
   size?: number
   alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        size,
        src,
        alt,
    } = props

    const stylesObj = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size])

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(styles.Avatar, {}, [className])}
            style={stylesObj}
        />
    )
}
