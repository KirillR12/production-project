import { memo, useCallback } from 'react'
import ThemeIconLigth from '@/shared/assets/icons/theme-light.svg'
import { Theme, useTheme } from '@/app/providers/ThemeProviders'
import { Button, ButtonTheme } from '../../shared/ui/Button/Button'
import ThemeIconDark from '@/shared/assets/icons/theme-dark.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    const onToggleHandler = useCallback(() => {
        toggleTheme(() => {
            // saveJsonSettings()
        })
    }, [toggleTheme])

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            {theme === Theme.LIGHT ? <ThemeIconDark /> : <ThemeIconLigth />}
        </Button>
    )
})
