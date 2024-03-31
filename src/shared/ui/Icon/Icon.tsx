import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'

 interface IconProps {
   className?: string
   Svg: React.VFC<React.SVGProps<SVGSVGElement>>
   inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { t } = useTranslation()

    const {
        className,
        Svg,
        inverted,
    } = props

    return (
        <Svg className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className])} />
    )
})
