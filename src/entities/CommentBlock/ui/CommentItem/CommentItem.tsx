import { AppLink, classNames } from 'shared'
import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import styles from './styles.module.scss'
import { CommentBlock } from '../../model/types/CommentBlock'

 interface CommentItemProps {
   className?: string
   comment: CommentBlock
   isLoading?: boolean
}

export const CommentItem = memo((props: CommentItemProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentItem, {}, [className])}>
                <div className={styles.blockUser}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={styles.nameUser} height={16} width={100} />
                </div>
                <Skeleton height={40} width="100%" />
            </div>
        )
    }

    return (
        <div className={classNames(styles.CommentItem, {}, [className])}>
            <AppLink to={`/${RoutePath.profile}${comment.user.id}`} className={styles.blockUser}>
                {comment?.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <Text className={styles.nameUser} title={comment?.user.username} />
            </AppLink>
            <Text text={comment?.text} />
        </div>
    )
})
