import { classNames } from 'shared'
import styles from './styles.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear'
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   className?: string,
   theme?: ThemeButton
}

export const Button: FC <ButtonProps>= (props) => {

const {
    children,
    className,
    theme = ThemeButton.CLEAR,
    ...otherProps
} = props

    return (
    <button 
    className={classNames(styles.Button, {}, [className, styles[theme]])}
    {...otherProps}
    >
{children}
    </button>
  )
 }