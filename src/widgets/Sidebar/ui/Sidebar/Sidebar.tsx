import { ThemeSwitcher, classNames } from 'shared'
import { useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import styles from './styles.module.scss'

 interface SidebarProps {
   className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false)

    const unToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={unToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    )
}
