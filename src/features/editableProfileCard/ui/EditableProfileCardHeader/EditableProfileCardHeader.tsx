import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { getAuthUser } from '@/entities/User'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { getProfileReadonly } from '../../model/selector/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selector/getProfileData/getProfileData'
import { ProfileActions } from '../../model/slice/ProfileSlice'
import { ProfileSaveEditThunk } from '../../model/services/ProfileSaveEditThunk/ProfileSaveEditThunk'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = (
    props: EditableProfileCardHeaderProps
) => {
    const { className } = props

    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)

    const authUser = useSelector(getAuthUser)
    const profile = useSelector(getProfileData)
    const canEdit = authUser?.id === profile?.id

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false))
    }, [dispatch])

    const undoEditing = useCallback(() => {
        dispatch(ProfileActions.cancelEdit())
    }, [dispatch])

    const saveEditing = useCallback(() => {
        dispatch(ProfileSaveEditThunk())
    }, [dispatch])

    return (
        <HStack
            justify="between"
            max
            className={classNames('', {}, [className])}
        >
            <Text title={t('Профиль')} />
            {canEdit &&
                (readonly ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                        data-testid="EditableProfileCardHeader.EditBtn"
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <HStack gap="8">
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={undoEditing}
                            data-testid="EditableProfileCardHeader.CancelBtn"
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={saveEditing}
                            data-testid="EditableProfileCardHeader.SaveBtn"
                        >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                ))}
        </HStack>
    )
}
