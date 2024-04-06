import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { MyPopover } from '@/shared/ui/Popups'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { NotificationsList } from '@/entities/Notifications'
import Notification from '@/shared/assets/icons/notification.svg'
import { Drawer } from '@/shared/ui/Drawer'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'
import styles from './styles.module.scss'

export const NotificationBtn = memo(() => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={Notification} inverted />
        </Button>
    )

    return (
        <div className="hello234234">
            <BrowserView className="hello">
                <MyPopover trigger={(
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={Notification} inverted />
                    </Button>
                )}
                >
                    <NotificationsList className={styles.notifications} />
                </MyPopover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>

    )
})
