import { Button, classNames } from 'shared'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions, getAuthUser } from 'entities/User'
import styles from './styles.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props

    const [isAuthModal, setIsAuthModal] = useState(false)

    const { t } = useTranslation()

    const authUser = useSelector(getAuthUser)

    const dispatch = useDispatch()

    const toggleOpenMadal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const toggleCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const toggleLogOut = useCallback(() => {
        dispatch(UserActions.setLogOut())
    }, [dispatch])

    if (authUser) {
        return (
            <header className={classNames(styles.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE_INVERTED}
                    onClick={toggleLogOut}

                >
                    {t('Выйти')}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={toggleOpenMadal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    isClose={toggleCloseModal}
                />
            )}
        </header>
    )
}
