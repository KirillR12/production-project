import { memo } from 'react'
import { Card } from '@/shared/ui/Card'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './styles.module.scss'
import { ArticleView } from '../../model/consts/consts'

interface ArticleListItemSkeletonProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(styles.ArticleListItemSkeleton, {}, [
                        className,
                        styles.BIG,
                    ])}
                >
                    <Card>
                        <div className={styles.header}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton
                                width={150}
                                height={16}
                                className={styles.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={styles.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={styles.title}
                        />
                        <Skeleton height={200} className={styles.img} />
                        <div className={styles.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            )
        }

        return (
            <div
                className={classNames(styles.ArticleListItemSkeleton, {}, [
                    className,
                    styles.SMALL,
                ])}
            >
                <Card>
                    <div className={styles.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        className={styles.title}
                    />
                </Card>
            </div>
        )
    }
)
