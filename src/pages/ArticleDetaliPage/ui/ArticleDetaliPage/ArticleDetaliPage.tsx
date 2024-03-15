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
import { ArticleCommentThunk } from '../../model/servers/ArticleCommentThunk'
import { getArticleCommentError, getArticleCommentIsLoading } from '../../model/selector/getArticleComment'
import styles from './styles.module.scss'
import { getSelectorsComments } from '../../model/slice/ArticleCommentSlice'
import { getArticleRecommends } from '../../model/slice/ArticleRecommendatiosSlice'
import { getArticleRecommendsIsLoading } from '../../model/selector/getArticleRecommends'
import { ArticleRecommendsThunk } from '../../model/servers/ArticleRecommendsThunk'
import { articleDetaliReducer } from '../../model/slice'
import { ArticleDetaliPageHeader } from '../ArticleDetaliPageHeader/ArticleDetaliPageHeader'

 interface ArticleDetaliPageProps {
   className?: string
}

const reducers: ReducerList = {
    articleDetaliPage: articleDetaliReducer,
}

const ArticleDetaliPage = ({ className }: ArticleDetaliPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{id: string}>()
    const dispatch = useAppDispatch()

    const comments = useSelector(getSelectorsComments.selectAll)
    const isLoadingComment = useSelector(getArticleCommentIsLoading)
    const errorComment = useSelector(getArticleCommentError)

    const recommendation = useSelector(getArticleRecommends.selectAll)
    const isLoadingRecommendation = useSelector(getArticleRecommendsIsLoading)

    useInitialEffect(() => {
        dispatch(ArticleCommentThunk(id))
        dispatch(ArticleRecommendsThunk())
    })

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentArticleThunk(text))
    }, [dispatch])

    if (!id) {
        return <div>{t('Статья не существует')}</div>
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetaliPageHeader />
                <ArticleDetali id={id} />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <Text
                    size={TextSize.L}
                    className={styles.title}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    articles={recommendation}
                    isLoading={isLoadingRecommendation}
                    view={ArticleView.SMALL}
                    className={styles.articleList}
                    target="_black"
                />
                <Text
                    size={TextSize.L}
                    className={styles.title}
                    title={t('Комментарии')}
                />
                <CommentList
                    comments={comments}
                    isLoading={isLoadingComment}
                    error={errorComment}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetaliPage)
