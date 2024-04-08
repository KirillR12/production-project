import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { Theme } from '@/shared/const/theme'

export interface useThemeResulf {
    theme: Theme;
    toggleTheme: () => void
}

export function useTheme(): useThemeResulf {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        let themeHalper
        switch (theme) {
        case Theme.LIGHT:
            themeHalper = Theme.DARK
            break
        case Theme.DARK:
            themeHalper = Theme.RED
            break
        default:
            themeHalper = Theme.LIGHT
            break
        }
        setTheme?.(themeHalper)
        document.body.className = themeHalper
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeHalper)
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    }
}
