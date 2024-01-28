import { classNames } from 'shared'
import styles from './styles.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(styles.Navbar, {}, [className])} />
)
