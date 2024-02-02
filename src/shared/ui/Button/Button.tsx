import { classNames } from 'shared'
import { ButtonHTMLAttributes, FC } from 'react'
import styles from './styles.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clear_inverted'
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
   size?: ButtonSize,
   disabled?: boolean
}

export const Button: FC <ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(
                styles.Button,
                { [styles.square]: square, [styles.disabled]: disabled },
                [className, styles[theme], styles[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}
