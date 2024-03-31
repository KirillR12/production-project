import { ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal'
import styles from './styles.module.scss'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

 interface ModalProps {
   className?: string,
   children?: ReactNode,
   isOpen: boolean,
   onClose: () => void,
}

const ANIMATE_DELAY = 300

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props

    const {
        isClosing,
        isMounted,
        close,
    } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATE_DELAY,
    })

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    if (!isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <Overlay onClick={() => close()} />
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
}
