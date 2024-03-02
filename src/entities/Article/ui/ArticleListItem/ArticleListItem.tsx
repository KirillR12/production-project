import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import styles from './styles.module.scss'

 interface ArticleListItemProps {
   className?: string
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation()

    const {
        className,
    } = props

    return (
        <div className={classNames(styles.ArticleListItem, {}, [className])}>
            {t('ArticleListItem')}
        </div>
    )
})
