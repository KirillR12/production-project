import { classNames } from 'shared'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    ProfileActions,
    ProfileCard, ProfileReducer, ProfileThunk, getProfileError, getProfileIsLoading,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile/model/selector/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from 'entities/Profile/model/selector/getProfileForm/getProfileForm'
import { CurrencySchema } from 'entities/Currency/model/types/CurrencySchema'
import { CountrySchema } from 'entities/Country'
import styles from './styles.module.scss'
import { ProfileHeaders } from './ProfileHeaders/ProfileHeaders'

 interface ProfileProps {
   className?: string
}

const ProfilePage = ({ className }: ProfileProps) => {
    const reducer: ReducerList = {
        profile: ProfileReducer,
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(ProfileThunk())
    }, [dispatch])

    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

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
            <ProfileHeaders />
            <div className={classNames(styles.Profile, {}, [className])}>
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
            </div>
        </DynamicModuleLoader>
    )
}
export default ProfilePage
