import {
    FC, useMemo, useState,
} from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProviders/lib/ThemeContext'

export interface ThemeProviderProps {
    initialState?: Theme,

}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

    const {
        initialState,
        children,
    } = props

    const [theme, setTheme] = useState<Theme>(initialState || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (

        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
