import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { StoreProviderDecorator } from 'shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import Profile from './Profile'

const meta: Meta<typeof Profile> = {
    title: 'pages/Profile',
    component: Profile,
}

export default meta
type Story = StoryObj<typeof Profile>;

export const Ligth: Story = {
    decorators: [StoreProviderDecorator({})],
}

export const Dark: Story = {
    decorators: [ThemeDecorater(Theme.DARK), StoreProviderDecorator({})],
}
