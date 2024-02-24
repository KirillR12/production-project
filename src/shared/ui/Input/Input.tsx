import React, { InputHTMLAttributes, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import styles from './styles.module.scss'

type InputHTMLAttribut = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

export enum InputTheme {
    OUTLINE = 'outline'
}

export interface InputProps extends InputHTMLAttribut {
className?: string
value?: string | number
onChange?: (value: string) => void
theme?: InputTheme
readonly?: boolean
label?: string
}

export const Input = memo((props: InputProps) => {
    const {
        label,
        type = 'text',
        value,
        onChange,
        theme = InputTheme.OUTLINE,
        className,
        readonly,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [styles.readonly]: readonly,
    }

    return (
        <div>
            {label && (<span>{label}</span>)}
            <input
                className={classNames('', mods, [className, styles[theme]])}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    )
})
