import { Suspense } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal'
import { Loader } from '@/shared/ui/Loader'
import styles from './styles.module.scss'
import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose } = props

    return (
        <Modal
            className={classNames(styles.LoginModal)}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginForm onSucces={onClose} />
            </Suspense>
        </Modal>
    )
}
