import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to="/">{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="AboutPage">{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}
