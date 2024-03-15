import { classNames } from 'shared'
import { memo } from 'react'
import styles from './styles.module.scss'

export enum TextTheme {
    DEFAULT ='default',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER ='center',
    RIGTH = 'rigth',
    LEFT = 'left'
}

export enum TextSize {
    M = 'size_m',
    L ='size_l',
}

 interface TextProps {
   className?: string
   title?: string,
   text?: string,
   theme?: TextTheme,
   align?: TextAlign
   size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        size = TextSize.M,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT,
    } = props

    return (
        <div className={classNames(styles.title, {}, [className, styles[theme], styles[align], styles[size]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})
