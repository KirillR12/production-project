/* eslint-disable @typescript-eslint/no-shadow */
import { memo, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { CountrySchema } from '../../model/types/CountrySchema'

 interface CountryProps {
   className?: string
   value?: CountrySchema
   onChange?: (value: CountrySchema) => void
   readonly?: boolean
}

const options = [
    { value: CountrySchema.Armania, content: CountrySchema.Armania },
    { value: CountrySchema.Belarus, content: CountrySchema.Belarus },
    { value: CountrySchema.Kazakhstan, content: CountrySchema.Kazakhstan },
    { value: CountrySchema.Russia, content: CountrySchema.Russia },
    { value: CountrySchema.Ukraine, content: CountrySchema.Ukraine },
]

export const Country = memo((props: CountryProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as CountrySchema)
    }, [onChange])

    const { t } = useTranslation()

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
