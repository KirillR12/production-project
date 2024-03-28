import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react'

interface useModalProps {
    isClose: () => void
isOpen: boolean
animationDelay: number
}

export function useModal(props: useModalProps) {
    const {
        isClose,
        isOpen,
        animationDelay,
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMouser, setIsMouser] = useState(false)

    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const close = useCallback(() => {
        if (isClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                isClose()
                setIsClosing(false)
            }, animationDelay)
        }
    }, [isClose, animationDelay])

    useEffect(() => {
        if (isOpen) {
            setIsMouser(true)
        }
    }, [isOpen])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close()
        }
    }, [close])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return {
        isClosing,
        isMouser,
        close,
    }
}
