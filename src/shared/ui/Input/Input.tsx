import React, { InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './styles.module.scss'

type InputHTMLAttribut = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
    OUTLINE = 'outline'
}

export interface InputProps extends InputHTMLAttribut {
className?: string,
value?: string,
onChange?: (value: string) => void,
theme?: InputTheme
}

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        value,
        onChange,
        theme = InputTheme.OUTLINE,
        className,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div>
            <input
                className={classNames('', {}, [className, styles[theme]])}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    )
})
