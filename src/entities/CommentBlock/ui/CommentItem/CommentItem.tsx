import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { AppLink } from '@/shared/ui/AppLink'
import styles from './styles.module.scss'
import { CommentBlock } from '../../model/types/CommentBlock'
import { getRouteProfile } from '@/shared/const/router'

interface CommentItemProps {
    className?: string
    comment?: CommentBlock
    isLoading?: boolean
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack
                max
                className={classNames(styles.CommentItem, {}, [
                    className,
                    styles.loading,
                ])}
            >
                <div className={styles.blockUser}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        className={styles.nameUser}
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton height={40} width="100%" />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            gap="4"
            max
            className={classNames(styles.CommentItem, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={styles.blockUser}
            >
                {comment?.user.avatar && (
                    <Avatar src={comment.user.avatar} size={30} />
                )}
                <Text
                    className={styles.nameUser}
                    title={comment?.user.username}
                />
            </AppLink>
            <Text text={comment?.text} />
        </VStack>
    )
})
