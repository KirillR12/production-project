import { Button, classNames } from 'shared'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import styles from './styles.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const { t } = useTranslation()

    const toggleAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={toggleAuthModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                isClose={toggleAuthModal}
            />
        </div>
    )
}
