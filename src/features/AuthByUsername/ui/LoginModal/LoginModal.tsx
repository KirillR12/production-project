import { Loader, classNames } from 'shared'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
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
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}
