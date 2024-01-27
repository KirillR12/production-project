/* eslint-disable */
import { Theme } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'

export const ThemeDecorater = (theme: Theme) => (Story: any) => <div className={`app ${theme}`}><Story /></div>
