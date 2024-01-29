/* eslint-disable */
import { Theme, ThemeProvider } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'

export const ThemeDecorater = (theme: Theme) => (Story: any) => <ThemeProvider initialState={theme}><div className={`app ${theme}`}><Story /></div></ThemeProvider>
