import { Button, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

 interface PageErrorProps {
   className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={() => reloadPage()}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
