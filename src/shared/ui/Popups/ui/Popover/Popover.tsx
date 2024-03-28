import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from '../../../../types/ui'
import styles from './styles.module.scss'
import { mapDirectionClasses } from '../../styles/consts'
import popupsStyles from '../../styles/styles.module.scss'

interface MyPopoverProps {
    children: ReactNode
    trigger: ReactNode
    direction?: DropdownDirection
}

export function MyPopover(props: MyPopoverProps) {
    const {
        children,
        trigger,
        direction = 'bottom left',
    } = props

    const menuClasses = [
        mapDirectionClasses[direction],
    ]

    return (
        <Popover className={popupsStyles.Popups}>
            <Popover.Button className={popupsStyles.btn}>
                {trigger}
            </Popover.Button>

            <Popover.Panel className={classNames(styles.popuver, {}, menuClasses)}>
                {children}
            </Popover.Panel>
        </Popover>
    )
}
