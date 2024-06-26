import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import styles from './styles.module.scss'
import { ScrollActions } from '../model/slice/ScrollSlice'
import { getScrollPath } from '../model/selector/ScrollSelector'
import { TestProps } from '@/shared/types/testing'

interface PageProps extends TestProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const position = useSelector((state: StateSchema) =>
        getScrollPath(state, pathname)
    )

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            ScrollActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            })
        )
    }, 500)

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = position
    })

    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(styles.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? (
                <div className={styles.divTriggerRef} ref={triggerRef} />
            ) : null}
        </main>
    )
})
