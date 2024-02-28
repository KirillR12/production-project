import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import styles from './styles.module.scss'
import { CommentBlock } from '../../model/types/CommentBlock'
import { CommentItem } from '../CommentItem/CommentItem'

 interface CommentListProps {
   className?: string
   comments?: CommentBlock[]
   isLoading?: boolean
   error?: string
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation()

    const {
        className,
        comments,
        isLoading,
        error,
    } = props

    if (error) {
        return (
            <div className={classNames(styles.CommentList, {}, [className])}>
                <Text title={t('Произошла ошибка')} />
            </div>
        )
    }

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {comments?.length
                ? comments?.map((comment) => (
                    <CommentItem
                        className={styles.comment}
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                )) : (
                    <Text title={t('Комментарии отсутствуют')} />
                )}
        </div>
    )
})
