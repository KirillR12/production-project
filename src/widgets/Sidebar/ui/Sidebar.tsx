import { LangSwitcher, ThemeSwitcher, classNames } from 'shared'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

 interface SidebarProps {
   className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false)

    const unToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const { t } = useTranslation()

    return (
        <div
<<<<<<< HEAD:src/widgets/Sidebar/ui/Sidebar.tsx
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid="sidebar-button"
                type="button"
                onClick={unToggle}
            >
                {t('Свернуть')}
            </button>
=======
        data-testid='sidebar' 
        className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <button 
data-testid={'sidebar-button'}
            type="button" 
    onClick={unToggle}
            >
                {t('Свернуть')}
                </button>
>>>>>>> origin/main:src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    )
}