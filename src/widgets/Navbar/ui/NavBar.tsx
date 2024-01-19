import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared'
import styles from './styles.module.scss'

interface NavBarProps {
    className?: string
}

export function NavBar({ className }: NavBarProps) {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to="/">Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="AboutPage">О сайте</AppLink>
            </div>
        </div>
    )
}
