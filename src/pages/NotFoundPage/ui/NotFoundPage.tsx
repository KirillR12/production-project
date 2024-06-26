import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import styles from './styles.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(styles.NotFoundPage, {}, [className])}
        >
            {t('Страница не найдена')}
        </Page>
    )
}
