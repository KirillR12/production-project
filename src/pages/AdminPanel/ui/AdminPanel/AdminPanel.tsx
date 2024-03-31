import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from '@/widgets/Page'

const AdminPanel = () => {
    const { t } = useTranslation()
    return (
        <Page>
            {t('Админ панель')}
        </Page>
    )
}

export default memo(AdminPanel)
