import { classNames } from 'shared'
import { Modal } from 'shared/ui/Modal/Modal'
import styles from './styles.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

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
            <LoginForm />
        </Modal>
    )
}
