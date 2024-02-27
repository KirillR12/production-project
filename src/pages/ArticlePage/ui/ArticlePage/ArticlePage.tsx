import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

 interface ArticlePageProps {
   className?: string
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article')

    return (
        <div className={classNames('', {}, [className])}>
            {t('ARTICLE')}
        </div>
    )
}

export default memo(ArticlePage)
