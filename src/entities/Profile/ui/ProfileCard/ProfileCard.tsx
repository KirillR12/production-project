import { Button, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selector/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text/Text'
import { ButtonTheme } from 'shared/ui/Button/Button'
import styles from './styles.module.scss'

 interface ProfileCardProps {
   className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile')

    const data = useSelector(getProfileData)

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={styles.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={styles.input}
                />
            </div>
        </div>
    )
}
