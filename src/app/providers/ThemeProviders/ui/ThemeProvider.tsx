import { ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { Theme } from '@/shared/const/theme'
import { useJsonSettings } from '@/entities/User'

export interface ThemeProviderProps {
    initialState?: Theme
    children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { theme: defaultTheme } = useJsonSettings()

    const { initialState, children } = props

    const [theme, setTheme] = useState<Theme>(
        initialState || defaultTheme || Theme.LIGHT
    )
    const [isTHemeInited, setTHemeInited] = useState(false)

    useEffect(() => {
        if (!isTHemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setTHemeInited(true)
        }
    }, [defaultTheme, isTHemeInited])

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
