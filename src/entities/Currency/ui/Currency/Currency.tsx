/* eslint-disable @typescript-eslint/no-shadow */
import { classNames } from 'shared'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CurrencySchema } from '../../model/types/CurrencySchema'

 interface CurrencyProps {
   className?: string
   value?: CurrencySchema
   onChange?: (value: CurrencySchema) => void
   readonly?: boolean
}

const options = [
    { value: CurrencySchema.EUR, content: CurrencySchema.EUR },
    { value: CurrencySchema.RUB, content: CurrencySchema.RUB },
    { value: CurrencySchema.USD, content: CurrencySchema.USD },
]

export const Currency = memo((props: CurrencyProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as CurrencySchema)
    }, [onChange])

    const { t } = useTranslation()

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
