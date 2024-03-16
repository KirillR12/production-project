import { Loader, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Currency } from 'entities/Currency/ui/Currency/Currency'
import { CurrencySchema } from 'entities/Currency/model/types/CurrencySchema'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Country, CountrySchema } from 'entities/Country'
import { Mods } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Profile } from '../../model/types/ProfileSchema'
import styles from './styles.module.scss'

 interface ProfileCardProps {
   className?: string,
   data?: Profile,
   error?: string,
   isLoading?: boolean,
   readonly?: boolean
   editFirstname?: (value?: string) => void;
   editLastname?: (value?: string) => void;
   editCity?: (value: string) => void,
   editAge?: (value: string) => void,
   editAvatar?: (value: string) => void,
   editCurrency?: (currency: CurrencySchema) => void,
   editCountry?: (country: CountrySchema) => void,
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        editFirstname,
        editLastname,
        editCity,
        editAge,
        editAvatar,
        editCurrency,
        editCountry,
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        )
    }

    const mods: Mods = {
        [styles.readonlyBorder]: !readonly,
    }

    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatar}>
                        <Avatar
                            size={150}
                            src={data?.avatar}
                            alt="."
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    label={t('Ваше имя')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={editFirstname}
                />
                <Input
                    value={data?.lastname}
                    label={t('Ваша фамилия')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={editLastname}
                />
                <Input
                    value={data?.city}
                    label={t('Ваш город')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={editCity}
                />
                <Input
                    value={data?.age}
                    label={t('Ваш возраст')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={editAge}
                />
                <Input
                    value={data?.avatar}
                    label={t('Ваш аватар')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={editAvatar}
                />
                <Currency
                    value={data?.currency}
                    className={styles.input}
                    onChange={editCurrency}
                    readonly={readonly}
                />
                <Country
                    className={styles.input}
                    value={data?.country}
                    onChange={editCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    )
})
