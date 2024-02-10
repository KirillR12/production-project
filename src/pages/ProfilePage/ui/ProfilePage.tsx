import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, ProfileReducer, ProfileThunk } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useEffect } from 'react'
import styles from './styles.module.scss'

 interface ProfileProps {
   className?: string
}

const ProfilePage = ({ className }: ProfileProps) => {
    const { t } = useTranslation()

    const reducer: ReducerList = {
        profile: ProfileReducer,
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(ProfileThunk())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(styles.Profile, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}
export default ProfilePage
