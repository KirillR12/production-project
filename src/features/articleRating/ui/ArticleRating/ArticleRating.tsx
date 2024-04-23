import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/RatingCard'
import { Skeleton } from '@/shared/ui/Skeleton'
import {
    useArateArticle,
    useGetArticleRating,
} from '../../api/articleRatingApi'
import { getAuthUser } from '@/entities/User'

export interface ArticleRatingProps {
    className?: string
    id: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, id } = props

    const { t } = useTranslation()

    const userId = useSelector(getAuthUser)

    const { data, isLoading } = useGetArticleRating({
        userId: userId?.id ?? '',
        articleId: id,
    })

    const [rateArticleMutation] = useArateArticle()

    const rating = data?.[0]

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userId?.id ?? '',
                    articleId: id,
                    rate: starsCount,
                    feedback,
                })
            } catch {
                throw new Error()
            }
        },
        [rateArticleMutation, userId, id]
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback)
        },
        [handleRateArticle]
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount)
        },
        [handleRateArticle]
    )

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t(
                'Оставьте свой отзыв о статье, это поможет улучшить качество'
            )}
            rate={rating?.rate}
            hasFeedback
        />
    )
})

export default ArticleRating
