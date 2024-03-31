import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import styles from './styles.module.scss'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import LoginForm from '../LoginForm/LoginForm'

 interface LoginModalProps {
   isOpen: boolean,
   onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props

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
