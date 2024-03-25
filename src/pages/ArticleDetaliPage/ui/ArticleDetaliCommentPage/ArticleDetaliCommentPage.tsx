import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { AddCommentForm, addCommentArticleThunk } from 'features/addCommentForm'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/CommentBlock'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { getSelectorsComments } from '../../model/slice/ArticleCommentSlice'
import { getArticleCommentError, getArticleCommentIsLoading } from '../../model/selector/getArticleComment/getArticleComment'
import { ArticleCommentThunk } from '../../model/servers/ArticleCommentThunk/ArticleCommentThunk'

 interface ArticleDetaliCommentPageProps {
   className?: string
   id: string
}

export const ArticleDetaliCommentPage = memo((props: ArticleDetaliCommentPageProps) => {
    const { t } = useTranslation()

    const {
        className,
        id,
    } = props

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(ArticleCommentThunk(id))
    })

    const comments = useSelector(getSelectorsComments.selectAll)
    const isLoadingComment = useSelector(getArticleCommentIsLoading)
    const errorComment = useSelector(getArticleCommentError)
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentArticleThunk(text))
    }, [dispatch])

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                comments={comments}
                isLoading={isLoadingComment}
                error={errorComment}
            />
        </VStack>
    )
})
