import { CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon'
import ErrorAvatar from '@/shared/assets/icons/user-avatar.svg'
import { Skeleton } from '../Skeleton'

 interface AvatarProps {
   className?: string
   src?: string
   size?: number
   alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        size = 100,
        src,
        alt,
    } = props

    const stylesObj = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size])

    const loadingAvatar = <Skeleton width={size} height={size} border="50%" />
    const errorAvatar = <Icon Svg={ErrorAvatar} width={size} height={size} inverted />

    return (
        <AppImage
            fallback={loadingAvatar}
            errorFallback={errorAvatar}
            src={src}
            alt={alt}
            className={classNames(styles.Avatar, {}, [className])}
            style={stylesObj}
        />
    )
}
