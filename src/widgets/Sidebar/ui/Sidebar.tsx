import {
    AppLink, LangSwitcher, ThemeSwitcher, classNames,
} from 'shared'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import Home from 'shared/assets/icons/home.svg'
import List from 'shared/assets/icons/list.svg'
import styles from './styles.module.scss'

 interface SidebarProps {
   className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const { t } = useTranslation()

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <Home className={styles.icon} />
                    <span className={styles.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={styles.item}
                >
                    <List className={styles.icon} />
                    <span className={styles.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={styles.lang}
                />
            </div>
        </div>
    )
}
