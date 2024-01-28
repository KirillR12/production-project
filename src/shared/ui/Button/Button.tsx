import { classNames } from 'shared'
import { ButtonHTMLAttributes, FC } from 'react'
import styles from './styles.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
M = 'size_m',
L = 'size_l',
XL = 'size_xl'
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   className?: string,
   theme?: ButtonTheme,
   square?: boolean,
   size?: ButtonSize
}

export const Button: FC <ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(
                styles.Button,
                { [styles.square]: square },
                [className, styles[theme], styles[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}
