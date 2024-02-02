import { Button, classNames } from 'shared'
import { Input, InputTheme } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { getLogin } from 'features/AuthByUsername/model/selectors/getLogin/getLogin'
import { LoginByUsername } from 'features/AuthByUsername/model/services/LoginByUsername/LoginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import styles from './styles.module.scss'
import { LoginActions } from '../../model/slice/LoginSlice'

 interface LoginFormProps {
   className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props

    const {
        username, password, isLoading, error,
    } = useSelector(getLogin)

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])

    const onLoginBtn = useCallback(() => {
        dispatch(LoginByUsername({ username, password }))
    }, [username, password, dispatch])

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('Авторизация')} />
            {error && <div><Text text={t('Не верный логин или пароль')} theme={TextTheme.ERROR} /></div>}
            <Input
                className={styles.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={styles.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={styles.inputBtn}
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={onLoginBtn}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
