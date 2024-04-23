import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionClasses } from '../../styles/consts'
import { DropdownDirection } from '../../../../types/ui'
import popupsStyles from '../../styles/styles.module.scss'

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

export function Dropdown(props: DropdownProps) {
    const { className, trigger, items, direction = 'top rigth' } = props

    const menuClasses = [mapDirectionClasses[direction]]

    return (
        <Menu as="div" className={classNames(styles.Dropdown, {}, [className])}>
            <Menu.Button className={popupsStyles.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            type="button"
                            className={classNames(styles.item, {
                                [popupsStyles.active]: active,
                            })}
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
                        <Menu.Item key={item.href} as={Fragment}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
