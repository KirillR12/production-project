import { AppLink, Button, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import Eye from 'shared/assets/icons/eye.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import styles from './styles.module.scss'
import {
    ArticlBlockText, Article, ArticleBlock, ArticleView,
} from '../../model/types/ArticleType'
import { ArticleDetaliText } from '../ArticleDetaliText/ArticleDetaliText'

 interface ArticleListItemProps {
   className?: string
   article: Article
   view?: ArticleView
   target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
        target,
    } = props

    const { t } = useTranslation()

    const types = <Text text={article.type?.join(', ')} className={styles.type} />
    const img = <img src={article.img} alt={article.title} className={styles.img} />
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={Eye} />
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks?.find((block) => block.type === ArticleBlock.TEXT) as ArticlBlockText

        return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles.BIG])}>

                <Card>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text text={article.user?.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>
                    <Text title={article.title} className={styles.title} />
                    {types}
                    {img}
                    {textBlock && <ArticleDetaliText block={textBlock} className={styles.textBlock} />}
                    <div className={styles.footer}>
                        <AppLink to={RoutePath.article_detale + article.id}>
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
        <div className={classNames(styles.ArticleListItem, {}, [className, styles.SMALL])}>
            <AppLink
                target={target}
                to={RoutePath.article_detale + article.id}
            >
                <Card>
                    <div className={styles.imageWrapper}>
                        {img}
                        <Text text={article.createdAt} className={styles.date} />
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
