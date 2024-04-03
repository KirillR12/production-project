import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
    } = props
    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feelback, setFeelback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feelback)
    }, [starsCount, feelback, onAccept])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [starsCount, onCancel])

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input value={feelback} onChange={setFeelback} placeholder={t('Ваш отзыв')} />
        </>
    )

    return (
        <Card className={classNames(styles.RatingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack gap="16" justify="end" max>
                            <Button
                                onClick={acceptHandle}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Отправить')}
                            </Button>
                            <Button
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Закрыть')}
                            </Button>
                        </HStack>
                    </VStack>

                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            onClick={acceptHandle}
                            theme={ButtonTheme.OUTLINE}
                            size={ButtonSize.L}
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    )
})
