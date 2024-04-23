import { memo, ReactNode, useCallback, useEffect } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProviders'
import { useModal } from '@/shared/lib/hooks/useModal'
import {
    AnimationProvider,
    useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider'
import { Overlay } from '../Overlay/Overlay'
import styles from './styles.module.scss'
import { Portal } from '../Portal/Portal'
import { Loader } from '../Loader/Loader'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose?: () => void
}

const height = window.innerHeight - 100

export const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs()

    const { className, children, isOpen, onClose } = props
    const { theme } = useTheme()

    const { isClosing, close, isMounted } = useModal({
        onClose,
        isOpen,
        animationDelay: 300,
    })

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false })
    }, [api])

    useEffect(() => {
        if (isOpen) {
            openDrawer()
        }
    }, [api, isOpen, openDrawer])

    const closeDrag = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        })
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel()
            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    closeDrag()
                } else {
                    openDrawer()
                }
            } else {
                api.start({ y: my, immediate: false })
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        }
    )

    if (!isMounted) {
        return null
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
        <Portal>
            <div
                className={classNames(styles.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={close} />
                <Spring.a.div
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    className={styles.sheet}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    )
})

export const DrawerAsync = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs()

    if (!isLoaded) {
        return <Loader />
    }

    return <DrawerContent {...props} />
})

export const Drawer = memo((props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
))
