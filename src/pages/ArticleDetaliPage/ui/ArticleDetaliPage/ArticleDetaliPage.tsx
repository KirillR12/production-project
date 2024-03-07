import { Button, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetali } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/CommentBlock'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { AddCommentForm, addCommentArticleThunk } from 'features/addCommentForm'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page/Page'
import { ArticleCommentThunk } from '../../model/servers/ArticleCommentThunk'
import { getArticleCommentError, getArticleCommentIsLoading } from '../../model/selector/ArticleComment'
import styles from './styles.module.scss'
import { ArticleCommentBlockReducer, getSelectorsComments } from '../../model/slice/ArticleCommentSlice'

 interface ArticleDetaliPageProps {
   className?: string
}

const reducers: ReducerList = {
    articleComment: ArticleCommentBlockReducer,
}

const ArticleDetaliPage = ({ className }: ArticleDetaliPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{id: string}>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const comments = useSelector(getSelectorsComments.selectAll)
    const isLoading = useSelector(getArticleCommentIsLoading)
    const error = useSelector(getArticleCommentError)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.article)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(ArticleCommentThunk(id))
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
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetali id={id} />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <Text
                    className={styles.title}
                    title={t('Комментарии')}
                />
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                    error={error}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetaliPage)
