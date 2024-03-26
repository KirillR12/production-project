import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
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
    S = 'size_s',
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
   'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        size = TextSize.M,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT,
        'data-testid': dataTestId = 'Text',
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={classNames(styles.title, {}, [className, styles[theme], styles[align], styles[size]])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={styles.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={styles.text}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
