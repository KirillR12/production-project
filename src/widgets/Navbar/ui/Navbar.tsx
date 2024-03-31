import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { getAuthUser } from '@/entities/User'
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationBtn } from '@/features/notificationBtn'
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

    const toggleOpenMadal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const toggleCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

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
                    <NotificationBtn />
                    <AvatarDropdown />
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
                    onClose={toggleCloseModal}
                />
            )}
        </header>
    )
}
