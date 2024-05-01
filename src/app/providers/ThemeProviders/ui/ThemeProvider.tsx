import { ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { Theme } from '@/shared/const/theme'
import { useJsonSettings } from '@/entities/User'

export interface ThemeProviderProps {
    initialState?: Theme
    children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings()

    const { initialState, children } = props

    const [theme, setTheme] = useState<Theme>(initialState || defaultTheme)
    const [isTHemeInited, setTHemeInited] = useState(false)

    useEffect(() => {
        if (!isTHemeInited) {
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

    document.body.className = defaultTheme

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
