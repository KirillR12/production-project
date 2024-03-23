import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { rtkApi } from 'shared/api/rtkApi'
import { Loader } from 'shared'

interface ArticleRecommendationsListProps {
    className?: string
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()

    const { data: articles, isLoading } = useArticleRecommendationsList(3)

    if (isLoading) {
        return <Loader />
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                view={ArticleView.SMALL}
                target="_black"
            />
        </VStack>
    )
})
