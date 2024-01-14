import { Link, Outlet } from "react-router-dom"
import './styles/index.scss'
import { Suspense } from "react"
import { useTheme } from "./providers/ThemeProviders/lib/useTheme"
import { classNames } from "helpers/classNames/classNames"

export const App = () => {

const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {},[theme])}>
<Link to='MainPage'>Main</Link>
<Link to='AboutPage'>About</Link>
<Suspense fallback={<div>Loader</div>}>
<Outlet />
<button onClick={() => toggleTheme()}>Themes</button>
</Suspense>
        </div>
    )
}