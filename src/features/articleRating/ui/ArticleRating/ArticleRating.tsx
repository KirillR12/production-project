import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/RatingCard'
import { useArticleRecommendationsList } from '../../api/articleRatingApi'
import { getAuthUser } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface ArticleRatingProps {
    className?: string
    id: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        id,
    } = props

    const { t } = useTranslation()

    const userId = useSelector(getAuthUser)

    const { data, isLoading } = useArticleRecommendationsList({ userId: userId?.id ?? '', articleId: id })

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    const rating = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            rate={rating?.rate}
            hasFeedback
        />
    )
})
