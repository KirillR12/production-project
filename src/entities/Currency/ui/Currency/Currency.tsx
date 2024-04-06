import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox } from '@/shared/ui/Popups'
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

    const onChangeHandler = useCallback((valueNew: string) => {
        onChange?.(valueNew as CurrencySchema)
    }, [onChange])

    const { t } = useTranslation()

    return (
        <Listbox
            className={className}
            label={t('Укажите валюту')}
            defaultValue={t('Укажите валюту')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
