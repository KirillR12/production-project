import { classNames } from 'shared'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

 interface ModalProps {
    className?: string,
   children?: ReactNode
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
    } = props

    return (
        <div className={classNames(styles.Modal, {}, [className])}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}
