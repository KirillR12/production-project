import { classNames } from 'shared'
import { memo } from 'react'
import styles from './styles.module.scss'

export enum TextTheme {
    DEFAULT ='default',
    ERROR = 'error',
}

 interface TextProps {
   className?: string
   title?: string,
   text?: string,
   theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.DEFAULT,
    } = props

    return (
        <div className={classNames(styles.title, {}, [className, styles[theme]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})
