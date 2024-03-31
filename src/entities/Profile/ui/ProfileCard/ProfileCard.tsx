import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { Currency } from '@/entities/Currency/ui/Currency/Currency'
import { CurrencySchema } from '@/entities/Currency/model/types/CurrencySchema'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Country, CountrySchema } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader/Loader'
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
            <VStack
                align="center"
                justify="center"
                max
                className={classNames(styles.ProfileCard, {}, [className, styles.loading])}
            >
                <Loader />
            </VStack>
        )
    }

    if (error) {
        return (
            <VStack className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                />
            </VStack>
        )
    }

    const mods: Mods = {
        [styles.readonlyBorder]: !readonly,
    }

    return (
        <VStack gap="8" max className={classNames(styles.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar
                        size={150}
                        src={data?.avatar}
                        alt="."
                    />
                </HStack>
            )}
            <Input
                value={data?.first}
                label={t('Ваше имя')}
                readonly={readonly}
                onChange={editFirstname}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                label={t('Ваша фамилия')}
                readonly={readonly}
                onChange={editLastname}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.city}
                label={t('Ваш город')}
                readonly={readonly}
                onChange={editCity}
            />
            <Input
                value={data?.age}
                label={t('Ваш возраст')}
                readonly={readonly}
                onChange={editAge}
            />
            <Input
                value={data?.avatar}
                label={t('Ваш аватар')}
                readonly={readonly}
                onChange={editAvatar}
            />
            <Currency
                value={data?.currency}
                onChange={editCurrency}
                readonly={readonly}
            />
            <Country
                value={data?.country}
                onChange={editCountry}
                readonly={readonly}
            />
        </VStack>
    )
})
