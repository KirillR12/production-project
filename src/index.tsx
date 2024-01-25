import { App } from 'app/App'
import { ErrorBoundary } from 'app/providers/ErrorBaundary/ui/ErrorBaundary'
import { ThemeProvider } from 'app/providers/ThemeProviders/ui/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

render(
    <ThemeProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </ThemeProvider>,
    document.getElementById('root'),
)
