import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './styles.module.scss'
import { useArticleRecommendationsList } from '../../api/notificationsApi'
import { NotificationsItem } from '../NotificationsItem/NotificationsItem'

interface NotificationsListProps {
    className?: string
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const { className } = props

    const { data, isLoading } = useArticleRecommendationsList(null, {
        pollingInterval: 5000,
    })

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(styles.NotificationsList, {}, [
                    className,
                ])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        )
    }

    return (
        <VStack
            gap="8"
            className={classNames(styles.NotificationsList, {}, [className])}
        >
            {data?.map((notification) => (
                <NotificationsItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </VStack>
    )
})
