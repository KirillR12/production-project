import { classNames } from 'shared'
import { ButtonHTMLAttributes, FC } from 'react'
import styles from './styles.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   className?: string,
   theme?: ThemeButton
}

export const Button: FC <ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
