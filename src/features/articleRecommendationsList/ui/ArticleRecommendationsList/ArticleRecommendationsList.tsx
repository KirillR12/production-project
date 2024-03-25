import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { Loader } from 'shared'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsListApi/articleRecommendationsListApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()

    const { data: articles, isLoading } = useArticleRecommendationsList(3)

    if (isLoading || !articles) {
        return <Loader />
    }
    console.log(articles)

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
