import { Button } from 'shared'
import { Input, InputTheme } from 'shared/ui/Input/Input'
import styles from './styles.module.scss'

 interface LoginFormProps {
   className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props

    return (
        <div>
            <Input className={styles.input} />
            <Input className={styles.input} />
            <Button className={styles.inputBtn}>Войти</Button>
        </div>
    )
}
