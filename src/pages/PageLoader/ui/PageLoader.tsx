import { Loader, classNames } from 'shared'
import { Page } from 'widgets/Page'
import styles from './styles.module.scss'

 interface PageLoaderProps {
   className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <Page className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </Page>
)
