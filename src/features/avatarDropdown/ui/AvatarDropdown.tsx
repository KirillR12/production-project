import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from '@/shared/ui/Popups'
import { Avatar } from '@/shared/ui/Avatar'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { UserActions, getAuthUser, isUserAdmin } from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'

export const AvatarDropdown = memo(() => {
    const { t } = useTranslation()

    const authUser = useSelector(getAuthUser)

    const dispatch = useAppDispatch()

    const isAdmin = useSelector(isUserAdmin)

    const toggleLogOut = useCallback(() => {
        dispatch(UserActions.setLogOut())
    }, [dispatch])

    if (authUser) {
        return (
            <Dropdown
                direction="bottom left"
                trigger={<Avatar src={authUser.avatar} size={30} />}
                items={[
                    ...(isAdmin
                        ? [
                              {
                                  content: t('Админка'),
                                  href: getRouteAdminPanel(),
                              },
                          ]
                        : []),
                    {
                        content: t('Профиль'),
                        href: getRouteProfile(authUser.id),
                    },
                    {
                        content: t('Выйти'),
                        onClick: toggleLogOut,
                    },
                ]}
            />
        )
    }
    return null
})
