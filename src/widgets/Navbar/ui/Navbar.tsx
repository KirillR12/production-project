import { AppLink, Button, classNames } from 'shared'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions, getAuthUser } from 'entities/User'
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
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

    // const itemsDropdown = useMemo(() => (
    //     [
    //         {
    //             content: t('Профиль'),
    //             href: RoutePath.profile + authUser.id,
    //         },
    //         {
    //             content: t('Выйти'),
    //             onClick: toggleLogOut,
    //         },
    //     ]
    // ), [t, toggleLogOut, authUser])

    if (authUser) {
        return (
            <header className={classNames(styles.Navbar, {}, [className])}>
                <Text
                    title={t('Habr.ru')}
                    theme={TextTheme.INVERTED}
                    size={TextSize.L}
                    className={styles.appName}
                />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                >
                    {t('Создать новую статью')}
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    trigger={<Avatar src={authUser.avatar} size={30} />}
                    className={styles.btn}
                    items={[
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authUser.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: toggleLogOut,
                        },
                    ]}
                />
            </header>
        )
    }

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <Text title={t('Habr.ru')} />
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={toggleOpenMadal}
                className={styles.btn}
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
