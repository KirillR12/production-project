import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '@/shared/ui/Modal'
import { Text } from '@/shared/ui/Text'
import { SaveJsonSetting, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation()

    const [isOpen, setOpen] = useState(false)

    const dispatch = useAppDispatch()
    const { isArticlePageWasOpened } = useJsonSettings()

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setOpen(true)
            dispatch(SaveJsonSetting({ isArticlePageWasOpened: true }))
        }
    }, [dispatch, isArticlePageWasOpened])

    const onClose = () => setOpen(false)

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Text title={t('Добро пожаловать')} />
        </Modal>
    )
})
