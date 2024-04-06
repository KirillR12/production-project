import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { Text } from '@/shared/ui/Text'

const ProfilePage = () => {
    const { t } = useTranslation('profile')
    const { id } = useParams<{id: string}>()

    if (!id) {
        return <Text title={t('Статья не найдена')} />
    }

    return (
        <Page>
            <VStack gap="8">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}
export default ProfilePage
