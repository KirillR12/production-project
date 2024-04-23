import { Theme, ThemeProvider } from '@/app/providers/ThemeProviders'
// eslint-disable-next-line fedotov-fsd/layer-imports
import '@/app/styles/index.scss'

export const ThemeDecorater = (theme: Theme) => (Story: any) => (
    <ThemeProvider initialState={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
)
