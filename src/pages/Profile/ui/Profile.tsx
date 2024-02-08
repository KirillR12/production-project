import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileReducer } from 'entities/Profile'
import styles from './styles.module.scss'

 interface ProfileProps {
   className?: string
}

const Profile = ({ className }: ProfileProps) => {
    const { t } = useTranslation()

    const reducer: ReducerList = {
        profile: ProfileReducer,
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(styles.Profile, {}, [className])}>
                {t('Profile')}
            </div>
        </DynamicModuleLoader>
    )
}
export default Profile
