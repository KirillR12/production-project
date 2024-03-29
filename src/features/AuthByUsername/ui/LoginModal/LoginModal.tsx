import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import styles from './styles.module.scss'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'

 interface LoginModalProps {
   isOpen: boolean,
   isClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        isClose,
    } = props

    return (
        <Modal
            className={classNames(styles.LoginModal)}
            isOpen={isOpen}
            isClose={isClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSucces={isClose} />
            </Suspense>
        </Modal>
    )
}
