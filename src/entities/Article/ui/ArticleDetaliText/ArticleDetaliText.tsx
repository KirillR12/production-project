import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { ArticlBlockText } from '../../model/types/ArticleType'
import styles from './styles.module.scss'

interface ArticleDetaliTextProps {
    className?: string
    block: ArticlBlockText
}

export const ArticleDetaliText = memo((props: ArticleDetaliTextProps) => {
    const { t } = useTranslation()

    const { className, block } = props

    return (
        <div className={classNames(styles.ArticleDetaliText, {}, [className])}>
            {block.title && (
                <Text className={styles.title} title={block.title} />
            )}
            {block.paragraphs.map((el) => (
                <Text className={styles.paragraf} key={el} text={t(el)} />
            ))}
        </div>
    )
})
