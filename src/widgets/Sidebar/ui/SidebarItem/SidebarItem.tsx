import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { classNames } from '@/shared/lib/classNames/classNames'

import { getAuthUser } from '@/entities/User'
import { SidebarItemType } from '../../model/types/sidebar'
import styles from './styles.module.scss'

 interface SidebarButtonProps {
item: SidebarItemType,
collapsed: boolean
 }

export const SidebarItem = (props: SidebarButtonProps) => {
    const {
        item,
        collapsed,
    } = props

    const { t } = useTranslation()

    const isAuth = useSelector(getAuthUser)

    if (!isAuth && item.authOnly) {
        return null
    }

    return (
        <div className={classNames('', { [styles.collapsed]: collapsed })}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
            >
                <item.Icon className={styles.icon} />
                <span className={styles.link}>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    )
}
