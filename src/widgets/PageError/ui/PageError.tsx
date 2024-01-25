import { Button, classNames } from 'shared'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

 interface PageErrorProps {
   className?: string
}

export const PageError = ({className}: PageErrorProps) => {

    const {t} = useTranslation()

    const reloadPage = () => {
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