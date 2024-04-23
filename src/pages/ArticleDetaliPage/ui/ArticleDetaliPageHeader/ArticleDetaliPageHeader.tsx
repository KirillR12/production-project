import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getArticleDetaliData } from '@/entities/Article'
import { HStack } from '@/shared/ui/Stack'
import styles from './styles.module.scss'
import { getArticle } from '../../model/selector/getArticle'
import { getRouteArticle, getRouteArticleDetali } from '@/shared/const/router'

interface ArticleDetaliPageHeaderProps {
    className?: string
}

export const ArticleDetaliPageHeader = memo(
    (props: ArticleDetaliPageHeaderProps) => {
        const { t } = useTranslation()

        const { className } = props

        const navigate = useNavigate()

        const canEdit = useSelector(getArticle)
        const article = useSelector(getArticleDetaliData)

        const onBackToList = useCallback(() => {
            navigate(getRouteArticle())
        }, [navigate])

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleDetali(article.id))
            }
        }, [navigate, article])

        return (
            <HStack
                max
                justify="between"
                className={classNames(styles.ArticleDetaliPageHeader, {}, [
                    className,
                ])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEditArticle}
                        className={styles.editBtn}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        )
    }
)
