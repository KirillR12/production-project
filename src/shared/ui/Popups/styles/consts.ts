import { DropdownDirection } from '../../../types/ui'
import styles from './styles.module.scss'

export const mapDirectionClasses: Record<DropdownDirection, string> = {
    'top rigth': styles.topRigth,
    'bottom rigth': styles.bottomRigth,
    'top left': styles.topLift,
    'bottom left': styles.bottomLift,
}
