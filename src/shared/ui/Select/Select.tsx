import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'
import styles from './styles.module.scss'

interface SelectOption {
    value: string;
    content: string;
}

export enum SelectTheme {
    OUTLINE = 'outline'
}

interface SelectProps {
    label?: string
    value?: string
    className?: string
    theme?: SelectTheme
    onChange?: (value: string) => void
    options: SelectOption[]
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        options,
        label,
        value,
        theme = SelectTheme.OUTLINE,
        readonly,
        onChange,
    } = props

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsHalper = useMemo(() => options?.map((el) => (
        <option
            className={styles.option}
            key={el.value}
        >
            {el.content}
        </option>
    )), [options])

    const mods: Mods = {
        [styles.readonly]: readonly,
    }

    return (
        <div className={styles.SelectBlock}>
            {label && (<span>{label}</span>)}
            <select
                className={classNames(styles.Select, mods, [className, styles[theme]])}
                disabled={readonly}
                value={value}
                onChange={onChangeSelect}
            >
                {optionsHalper}
            </select>
        </div>
    )
})
