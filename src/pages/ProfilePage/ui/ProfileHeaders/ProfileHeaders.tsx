import { Button, classNames } from 'shared'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfileActions } from 'entities/Profile'
import { useCallback } from 'react'
import { ProfileSaveEditThunk } from 'entities/Profile/model/services/ProfileSaveEditThunk/ProfileSaveEditThunk'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile/model/selector/getProfileReadonly/getProfileReadonly'
import styles from './styles.module.scss'

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
        <div className={classNames(styles.ProfileHeaders, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (

                <>
                    <Button
                        className={styles.editBtn}
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
                </>
            )}
        </div>
    )
}
