import { Link, Outlet } from "react-router-dom"
import { Counter } from "./components/Counter/Counter"
import './styles/index.scss'
import { Suspense, useContext, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./components/theme/ThemeContext"
import { useTheme } from "./components/theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

export const App = () => {

const {theme, toggleTheme} = useTheme()

console.log(theme)

    return (
        <div className={classNames('app', {}, [theme])}>
<Link to='MainPage'>Main</Link>
<Link to='AboutPage'>About</Link>
<Suspense fallback={<div>Loader</div>}>
<Outlet />
<button onClick={() => toggleTheme()}>Themes</button>
</Suspense>
            <Counter />
        </div>
    )
}