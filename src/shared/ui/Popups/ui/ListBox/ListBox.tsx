import { Fragment, ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import styles from './styles.module.scss'
import { Button, ButtonTheme } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import { mapDirectionClasses } from '../../styles/consts'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

export interface ListBoxProps {
    items: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange?: (value: string) => void
    readonly?: boolean
    label?: string
    direction?: DropdownDirection
}

export function Listbox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'top rigth',
    } = props

    const optionsClasses = [mapDirectionClasses[direction]]

    return (
        <HStack gap="8">
            {label && <span>{label}</span>}
            <HListbox
                as="div"
                className={classNames(styles.Listbox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button className={styles.btn}>
                    <Button disabled={readonly} theme={ButtonTheme.FORM_THEME}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(styles.list, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(styles.item, {
                                        [styles.active]: active,
                                        [styles.selected]: selected,
                                        [styles.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
