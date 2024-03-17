import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
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
            <VStack className={classNames('', {}, [className])}>
                <Text title={t('Произошла ошибка')} />
            </VStack>
        )
    }

    if (isLoading) {
        return (
            <VStack max className={classNames('', {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </VStack>
        )
    }

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments?.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                )) : (
                    <Text title={t('Комментарии отсутствуют')} />
                )}
        </VStack>
    )
})
