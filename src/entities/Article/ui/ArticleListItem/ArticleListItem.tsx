import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import Eye from 'shared/assets/icons/eye.svg'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover'
import styles from './styles.module.scss'
import { Article, ArticleView } from '../../model/types/ArticleType'

 interface ArticleListItemProps {
   className?: string
   article: Article
   view?: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
    } = props

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles.BIG])}>
                {article.type}
            </div>
        )
    }

    return (
        <div className={classNames(styles.ArticleListItem, {}, [className, styles.SMALL])}>
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img src={article.img} alt={article.title} className={styles.img} />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    <Text text={article.type.join(', ')} className={styles.type} />
                    <Text text={String(article.views)} className={styles.views} />
                    <Icon Svg={Eye} />
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </div>
    )
})
