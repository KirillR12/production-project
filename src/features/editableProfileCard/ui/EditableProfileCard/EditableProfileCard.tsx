import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfileCard } from 'entities/Profile'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { CountrySchema } from 'entities/Country'
import { CurrencySchema } from 'entities/Currency'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getProfileForm } from '../../model/selector/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selector/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selector/getProfileReadonly/getProfileReadonly'
import { getValidateErrors } from '../../model/selector/getValidateErrors/getValidateErrors'
import { ProfileActions, ProfileReducer } from '../../model/slice/ProfileSlice'
import { ProfileThunk } from '../../model/services/ProfileThunk/ProfileThunk'
import { ValidateProfileSchema } from '../../model/types/EditableProfileCardSchema'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
    id: string
}

const reducer: ReducerList = {
    profile: ProfileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        id,
    } = props

    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const validateError = {
        [ValidateProfileSchema.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileSchema.INCORRECT_USER_DATA]: t('Некорректное имя или фамилия'),
        [ValidateProfileSchema.NO_DATA]: t('Нет данных'),
        [ValidateProfileSchema.SERVER_ERROR]: t('Серверная ошибка'),
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(ProfileThunk(String(id)))
        }
    })

    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const errors = useSelector(getValidateErrors)

    const editFirstname = useCallback((value?: string) => {
        dispatch(ProfileActions.editProfile({ first: value || '' }))
    }, [dispatch])

    const editLastname = useCallback((value?: string) => {
        dispatch(ProfileActions.editProfile({ lastname: value || '' }))
    }, [dispatch])

    const editCity = useCallback((value?: string) => {
        dispatch(ProfileActions.editProfile({ city: value || '' }))
    }, [dispatch])

    const editAge = useCallback((value?: string) => {
        const regExp = /\D/g
        const val = value?.replace(regExp, '')
        dispatch(ProfileActions.editProfile({ age: Number(val || '') }))
    }, [dispatch])

    const editAvatar = useCallback((value?: string) => {
        dispatch(ProfileActions.editProfile({ avatar: value || '' }))
    }, [dispatch])

    const editCurrency = useCallback((currency: CurrencySchema) => {
        dispatch(ProfileActions.editProfile({ currency }))
    }, [dispatch])

    const editCountry = useCallback((country: CountrySchema) => {
        dispatch(ProfileActions.editProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <EditableProfileCardHeader />
            {errors?.length && errors.map((err: ValidateProfileSchema) => (
                <Text
                    data-testid="EditableProfileCard.Error"
                    theme={TextTheme.ERROR}
                    key={err}
                    title={validateError[err]}
                />
            ))}
            <ProfileCard
                data={form}
                isLoading={isLoading}
                error={error}
                editFirstname={editFirstname}
                editLastname={editLastname}
                readonly={readonly}
                editCity={editCity}
                editAge={editAge}
                editAvatar={editAvatar}
                editCurrency={editCurrency}
                editCountry={editCountry}
            />
        </DynamicModuleLoader>
    )
})
