import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetali, ArticleList, ArticleView } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/CommentBlock'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { AddCommentForm, addCommentArticleThunk } from 'features/addCommentForm'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Page } from 'widgets/Page'
import { VStack } from 'shared/ui/Stack'
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'
import { ArticleCommentThunk } from '../../model/servers/ArticleCommentThunk/ArticleCommentThunk'
import { getArticleCommentError, getArticleCommentIsLoading } from '../../model/selector/getArticleComment/getArticleComment'

import { getSelectorsComments } from '../../model/slice/ArticleCommentSlice'
import { getArticleRecommends } from '../../model/slice/ArticleRecommendatiosSlice'
import { getArticleRecommendsIsLoading } from '../../model/selector/getArticleRecommends/getArticleRecommends'
import { ArticleRecommendsThunk } from '../../model/servers/ArticleRecommendsThunk/ArticleRecommendsThunk'
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
