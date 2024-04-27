import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetali } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { articleDetaliReducer } from '../../model/slice'
import { ArticleDetaliPageHeader } from '../ArticleDetaliPageHeader/ArticleDetaliPageHeader'
import { ArticleDetaliCommentPage } from '../ArticleDetaliCommentPage/ArticleDetaliCommentPage'
import { ArticleRating } from '@/features/articleRating'
import { getFeatureFlags } from '@/shared/features/setGetFeatures'
import { Counter } from '@/entities/Counter'
import { toggleFeatures } from '@/shared/features/toggleFeatures'

interface ArticleDetaliPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetaliPage: articleDetaliReducer,
}

const ArticleDetaliPage = ({ className }: ArticleDetaliPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <div>{t('Статья не существует')}</div>
    }

    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')
    const isCounterEnabled = getFeatureFlags('isCounterEnabled')

    const counter = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <Counter />,
        off: () => <ArticleRecommendationsList />,
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16">
                    <ArticleDetaliPageHeader />
                    <ArticleDetali id={id} />
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingEnabled && <ArticleRating id={id} />}
                    <ArticleRecommendationsList />
                    <ArticleDetaliCommentPage id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetaliPage)
