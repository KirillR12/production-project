import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'
import styles from './styles.module.scss'

 interface NotFoundPageProps {
   className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <Page className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    )
}
