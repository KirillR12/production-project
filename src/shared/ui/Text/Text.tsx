import { classNames } from 'shared'
import { memo } from 'react'
import styles from './styles.module.scss'

export enum TextTheme {
    DEFAULT ='default',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER ='center',
    RIGTH = 'rigth',
    LEFT = 'left'
}

 interface TextProps {
   className?: string
   title?: string,
   text?: string,
   theme?: TextTheme,
   align?: string
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT,
    } = props

    return (
        <div className={classNames(styles.title, {}, [className, styles[theme], styles[align]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})
