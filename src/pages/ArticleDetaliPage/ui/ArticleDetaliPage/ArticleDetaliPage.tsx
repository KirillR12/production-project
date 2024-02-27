import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetali } from 'entities/Article'
import { useParams } from 'react-router-dom'

 interface ArticleDetaliPageProps {
   className?: string
}

const ArticleDetaliPage = ({ className }: ArticleDetaliPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{id: string}>()

    if (!id) {
        return <div>{t('Статья не существует')}</div>
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetali id={id} />
        </div>
    )
}

export default memo(ArticleDetaliPage)
