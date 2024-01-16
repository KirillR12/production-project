import './styles/index.scss'
import { useTheme } from "./providers/ThemeProviders/lib/useTheme"
import { AppRouter } from "./providers/router"
import { NavBar } from "widgets"
import { classNames } from 'shared'


export const App = () => {

const {theme} = useTheme()

    return (
        <div className={classNames('app', {},[theme])}>
            <NavBar />
<AppRouter />
        </div>
    )
}
