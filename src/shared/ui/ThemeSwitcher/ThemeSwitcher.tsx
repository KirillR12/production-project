import { Button, classNames } from 'shared'
import styles from './styles.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProviders'
import ThemeIconDark from 'shared/assets/icons/theme-dark.svg'
import ThemeIconLigth from 'shared/assets/icons/theme-light.svg'
import { ThemeButton } from '../Button/Button'


 interface ThemeSwitcherProps {
   className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    return (
<Button
theme={ThemeButton.CLEAR}
className={classNames(styles.ThemeSwitcher, {}, [className])}
onClick={toggleTheme}
>
{theme === Theme.LIGHT ? <ThemeIconDark />: <ThemeIconLigth />}
</Button>
  )
 }