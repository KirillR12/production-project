import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
import { ErrorBoundary } from '@/app/providers/ErrorBaundary/ui/ErrorBaundary'
import { ThemeProvider } from '@/app/providers/ThemeProviders/ui/ThemeProvider'
import '@/shared/config/i18n/i18n'
import '@/app/styles/index.scss'
import { StoreProvider } from '@/app/providers/StoreProvider'

const container = document.getElementById('root')
if (!container) {
    throw new Error('Контейнер root не найден')
}
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
)
