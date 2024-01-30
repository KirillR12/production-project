import { classNames } from 'shared'
import {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react'
import { useTheme } from 'app/providers/ThemeProviders'
import styles from './styles.module.scss'
import { Portal } from '../Portal/Portal'

 interface ModalProps {
   className?: string,
   children?: ReactNode,
   isOpen: boolean,
   isClose: () => void
}

const ANIMATE_DELAY = 300

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        isClose,
    } = props

    const [isClosing, setIsClosing] = useState(false)

    const { theme } = useTheme()

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    const close = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (isClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                isClose()
                setIsClosing(false)
            }, ANIMATE_DELAY)
        }
    }, [isClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className, theme])}>
                <div className={styles.overlay} onClick={() => closeHandler()}>
                    <div
                        className={styles.content}
                        onClick={close}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}