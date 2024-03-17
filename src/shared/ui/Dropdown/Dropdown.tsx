import { Menu } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, ReactNode } from 'react'
import { DropdownDirection } from 'shared/types/ui'
import styles from './styles.module.scss'
import { AppLink } from '../AppLink/AppLink'

interface DropdownItem {
disabled?: boolean
content: ReactNode
onClick?: () => void
href?: string
}

export interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClasses: Record<DropdownDirection, string> = {
    'top rigth': styles.topRigth,
    'bottom rigth': styles.bottomRigth,
    'top left': styles.topLift,
    'bottom left': styles.bottomLift,
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'top rigth',
    } = props

    const menuClasses = [
        mapDirectionClasses[direction],
    ]

    return (
        <Menu as="div" className={classNames(styles.Dropdown, {}, [className])}>
            <Menu.Button className={styles.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            type="button"
                            className={classNames(styles.item, { [styles.active]: active })}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.href}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item
                            key={item.href}
                            as={Fragment}
                        >
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
