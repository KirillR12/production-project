import { Page } from '@/widgets/Page'
import { Loader } from '@/shared/ui/Loader/Loader'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'

 interface PageLoaderProps {
   className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <Page className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </Page>
)
