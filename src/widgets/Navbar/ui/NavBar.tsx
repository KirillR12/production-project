import { Link } from "react-router-dom"
import styles from './styles.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher, classNames } from "shared"

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to='/'>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to='AboutPage'>О сайте</AppLink>
            </div>
        </div>
    )
}