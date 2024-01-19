import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProviders/lib/ThemeContext'

export const ThemeProvider: FC = ({ children }) => {
    const themeLS = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK

    const [theme, setTheme] = useState<Theme>(themeLS)

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
