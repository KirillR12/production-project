import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import styles from './styles.module.scss'
import { Notification } from '../../model/types/Notification'

 interface NotificationsItemProps {
   className?: string
   notification: Notification
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
    const { className, notification } = props
    const { t } = useTranslation()

    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(styles.NotificationItem, {}, [className])}
        >
            <Text title={notification.title} text={notification.description} />
            {notification.href ? (
                <a target="_blank" href={notification.href} rel="noreferrer">
                    {t('Перейти')}
                </a>
            ) : null}

        </Card>
    )

    return content
})
