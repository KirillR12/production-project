import type { Meta, StoryObj } from '@storybook/react'
import avatar from 'shared/assets/test/avatarTest.png'
import { CurrencySchema } from 'entities/Currency'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
}

export default meta
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            avatar,
            first: 'Кирилл',
            lastname: 'Федотов',
            age: 20,
            currency: CurrencySchema.RUB,
            city: 'Saratov',
            username: 'admin',
        },
    },
}

export const Error: Story = {
    args: { error: 'error' },
}

export const Loading: Story = {
    args: { isLoading: true },
}
