import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"


export interface useThemeResulf {
    theme: Theme;
    toggleTheme: () => void
}

export function useTheme(): useThemeResulf {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const themeHalper = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(themeHalper)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeHalper)
    }  

    return {
        theme,
        toggleTheme
    }
}