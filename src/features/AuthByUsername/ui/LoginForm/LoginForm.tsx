import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text, TextTheme } from '@/shared/ui/Text'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/selectors/getError/getError'
import styles from './styles.module.scss'
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice'

 interface LoginFormProps {
   className?: string,
   onSucces: () => void
}

const initialReducer: ReducerList = {
    login: LoginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onSucces,
    } = props

    const username = useSelector(getUsername)
    const password = useSelector(getPassword)
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])

    const onLoginBtn = useCallback(async () => {
        const result = await dispatch(LoginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSucces()
        }
    }, [onSucces, username, password, dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
