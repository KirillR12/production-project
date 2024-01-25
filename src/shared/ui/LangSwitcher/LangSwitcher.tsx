import { Button, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { ThemeButton } from 'shared/ui/Button/Button'
import styles from './styles.module.scss'

 interface LangSwitcherProps {
   className?: string
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={() => toggle()}
        >
            {t('Язык')}
        </Button>
    )
}
