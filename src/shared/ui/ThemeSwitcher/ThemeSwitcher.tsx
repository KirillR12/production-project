import { Theme, useTheme } from 'app/providers/ThemeProviders'
import ThemeIconDark from 'shared/assets/icons/theme-dark.svg'
import ThemeIconLigth from 'shared/assets/icons/theme-light.svg'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'

 interface ThemeSwitcherProps {
   className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <ThemeIconDark /> : <ThemeIconLigth />}
        </Button>
    )
})
