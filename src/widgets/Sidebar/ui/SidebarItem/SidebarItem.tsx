import { SidebarItemType } from 'widgets/Sidebar/model/items'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
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

    return (
        <div className={classNames('', { [styles.collapsed]: collapsed })}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={styles.item}
            >
                <item.Icon className={styles.icon} />
                <span className={styles.link}>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    )
}
