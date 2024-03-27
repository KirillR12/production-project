import { classNames } from 'shared/lib/classNames/classNames'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions, getAuthUser, isUserAdmin } from 'entities/User'
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { HStack } from 'shared/ui/Stack'
import Notification from 'shared/assets/icons/notification.svg'
import { Icon } from 'shared/ui/Icon/Icon'
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

    const isAdmin = useSelector(isUserAdmin)

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
                <HStack gap="16" className={styles.actions}>
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={Notification} inverted />
                    </Button>
                    <Dropdown
                        direction="bottom left"
                        trigger={<Avatar src={authUser.avatar} size={30} />}
                        items={[
                            ...(isAdmin ? [{
                                content: t('Админка'),
                                href: RoutePath.admin_panel,
                            }] : []),
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
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <Text
                title={t('Habr.ru')}
                theme={TextTheme.INVERTED}
                size={TextSize.L}
                className={styles.appName}
            />
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
