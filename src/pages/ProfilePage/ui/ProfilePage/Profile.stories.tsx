import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { StoreProviderDecorator } from 'shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/Profile',
    component: ProfilePage,
}

export default meta
type Story = StoryObj<typeof ProfilePage>;

export const Ligth: Story = {
    decorators: [StoreProviderDecorator({})],
}

export const Dark: Story = {
    decorators: [ThemeDecorater(Theme.DARK), StoreProviderDecorator({})],
}
