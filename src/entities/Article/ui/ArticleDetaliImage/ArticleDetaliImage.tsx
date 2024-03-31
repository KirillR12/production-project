import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/Text/Text'
import { ArticlBlockImage } from '../../model/types/ArticleType'
import styles from './styles.module.scss'

 interface ArticleDetaliImageProps {
   className?: string
   block: ArticlBlockImage
}

export const ArticleDetaliImage = memo((props: ArticleDetaliImageProps) => {
    const { t } = useTranslation()

    const {
        className,
        block,
    } = props

    return (
        <>
            <img
                className={classNames(styles.ArticleDetaliImage, {}, [className])}
                src={block.src}
                alt={block.title}
            />
            {block.title && (
                <Text
                    align={TextAlign.CENTER}
                    text={t(block.title)}
                />
            )}
        </>
    )
})
