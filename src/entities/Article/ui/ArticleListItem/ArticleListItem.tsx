import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import Eye from '@/shared/assets/icons/eye.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { AppLink } from '@/shared/ui/AppLink'
import styles from './styles.module.scss'
import { ArticlBlockText, Article } from '../../model/types/ArticleType'
import { ArticleDetaliText } from '../ArticleDetaliText/ArticleDetaliText'
import { ArticleBlock, ArticleView } from '../../model/consts/consts'
import { getRouteArticleDetali } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
    className?: string
    article: Article
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view = ArticleView.SMALL, target } = props

    const { t } = useTranslation()

    const types = (
        <Text text={article.type?.join(', ')} className={styles.type} />
    )
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={Eye} />
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks?.find(
            (block) => block.type === ArticleBlock.TEXT
        ) as ArticlBlockText

        return (
            <div
                data-testid={`ArticleListItem.${article.title}`}
                className={classNames(styles.ArticleListItem, {}, [
                    className,
                    styles.BIG,
                ])}
            >
                <Card>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text
                            text={article.user?.username}
                            className={styles.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </div>
                    <Text title={article.title} className={styles.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={styles.img}
                    />
                    {textBlock && (
                        <ArticleDetaliText
                            block={textBlock}
                            className={styles.textBlock}
                        />
                    )}
                    <div className={styles.footer}>
                        <AppLink to={getRouteArticleDetali(article.id)}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div
            data-testid={`ArticleListItem.${article.title}`}
            className={classNames(styles.ArticleListItem, {}, [
                className,
                styles.SMALL,
            ])}
        >
            <AppLink target={target} to={getRouteArticleDetali(article.id)}>
                <Card>
                    <div className={styles.imageWrapper}>
                        <AppImage
                            src={article.img}
                            alt={article.title}
                            className={styles.img}
                            fallback={<Skeleton width={200} height={200} />}
                        />
                        <Text
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </div>
                    <div className={styles.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={styles.title} />
                </Card>
            </AppLink>
        </div>
    )
})
