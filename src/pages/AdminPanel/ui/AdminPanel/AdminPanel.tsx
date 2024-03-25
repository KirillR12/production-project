import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from 'widgets/Page'

 interface AdminPanelProps {
}

const AdminPanel = (props: AdminPanelProps) => {
    const { t } = useTranslation()
    return (
        <Page>
            {t('Админ панель')}
        </Page>
    )
}

export default memo(AdminPanel)
