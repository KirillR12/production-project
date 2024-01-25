import { Loader, classNames } from 'shared'
import styles from './styles.module.scss'

 interface PageLoaderProps {
   className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
)
