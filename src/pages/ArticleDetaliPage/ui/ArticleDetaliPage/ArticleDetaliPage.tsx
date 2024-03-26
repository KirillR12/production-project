import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetali } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from 'widgets/Page'
import { VStack } from 'shared/ui/Stack'
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'
import { articleDetaliReducer } from '../../model/slice'
import { ArticleDetaliPageHeader } from '../ArticleDetaliPageHeader/ArticleDetaliPageHeader'
import { ArticleDetaliCommentPage } from '../ArticleDetaliCommentPage/ArticleDetaliCommentPage'

 interface ArticleDetaliPageProps {
   className?: string
}

const reducers: ReducerList = {
    articleDetaliPage: articleDetaliReducer,
}

const ArticleDetaliPage = ({ className }: ArticleDetaliPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{id: string}>()

    if (!id) {
        return <div>{t('Статья не существует')}</div>
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16">
                    <ArticleDetaliPageHeader />
                    <ArticleDetali id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetaliCommentPage id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetaliPage)
