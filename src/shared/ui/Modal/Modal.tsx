import { classNames } from 'shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { useModal } from 'shared/lib/hooks/useModal'
import styles from './styles.module.scss'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

 interface ModalProps {
   className?: string,
   children?: ReactNode,
   isOpen: boolean,
   isClose: () => void,
}

const ANIMATE_DELAY = 300

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        isClose,
    } = props

    const closeHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const {
        isClosing,
        isMouser,
        close,
    } = useModal({
        isClose,
        isOpen,
        animationDelay: ANIMATE_DELAY,
    })

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    if (!isMouser) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <Overlay onClick={() => close()} />
                <div
                    className={styles.content}
                    onClick={closeHandler}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
}
