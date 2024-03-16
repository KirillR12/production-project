import { Button, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ButtonTheme } from '../Button/Button'
import styles from './styles.module.scss'

 interface LangSwitcherProps {
   className?: string,
   short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={() => toggle()}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
})
