import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProviders/ui/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'),
)
