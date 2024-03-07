import { classNames } from 'shared'
import {
    MutableRefObject, ReactNode, memo, useRef,
} from 'react'
import { UseInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import styles from './styles.module.scss'

 interface PageProps {
   className?: string
   children: ReactNode
   onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

    UseInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(styles.Page, {}, [className])}
        >
            {children}
            <div
                ref={triggerRef}
            />
        </section>
    )
})
