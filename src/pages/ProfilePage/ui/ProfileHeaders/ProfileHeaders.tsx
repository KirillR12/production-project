import { Button, classNames } from 'shared'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfileActions, getProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { ProfileSaveEditThunk } from 'entities/Profile/model/services/ProfileSaveEditThunk/ProfileSaveEditThunk'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile/model/selector/getProfileReadonly/getProfileReadonly'
import { getAuthUser } from 'entities/User'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { Text } from 'shared/ui/Text/Text'

 interface ProfileHeadersProps {
   className?: string,
}

export const ProfileHeaders = (props: ProfileHeadersProps) => {
    const {
        className,
    } = props

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
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                readonly ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <HStack gap="8">
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={undoEditing}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={saveEditing}
                        >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                )
            )}
        </HStack>
    )
}
