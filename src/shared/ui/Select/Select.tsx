import { ChangeEvent, useMemo } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

export enum SelectTheme {
    OUTLINE = 'outline',
}

interface SelectProps<T extends string> {
    label?: string
    value?: T
    className?: string
    theme?: SelectTheme
    onChange?: (value: T) => void
    options?: SelectOption<T>[]
    readonly?: boolean
    'data-testid'?: string
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        options,
        label,
        value,
        theme = SelectTheme.OUTLINE,
        readonly,
        onChange,
        'data-testid': dataTestId = test,
    } = props

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    const optionsHalper = useMemo(
        () =>
            options?.map((el) => (
                <option
                    data-testid={`Selected.${el.value}`}
                    className={styles.option}
                    key={el.value}
                    value={el.value}
                >
                    {el.content}
                </option>
            )),
        [options]
    )

    const mods: Mods = {
        [styles.readonly]: readonly,
    }

    return (
        <div className={styles.SelectBlock}>
            {label && <span>{label}</span>}
            <select
                data-testid={dataTestId}
                className={classNames(styles.Select, mods, [
                    className,
                    styles[theme],
                ])}
                disabled={readonly}
                value={value}
                onChange={onChangeSelect}
            >
                {optionsHalper}
            </select>
        </div>
    )
}
