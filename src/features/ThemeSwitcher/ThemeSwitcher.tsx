import { memo, useCallback } from 'react'
import ThemeIconLigth from '@/shared/assets/icons/theme-light.svg'
import { Theme, useTheme } from '@/app/providers/ThemeProviders'
import { Button, ButtonTheme } from '../../shared/ui/Button/Button'
import ThemeIconDark from '@/shared/assets/icons/theme-dark.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SaveJsonSetting } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    const dispatch = useAppDispatch()

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(SaveJsonSetting({ theme: newTheme }))
        })
    }, [dispatch, toggleTheme])

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
