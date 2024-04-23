import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { StoreProviderDecorator } from '@/shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Ligth: Story = {
    args: {},
    decorators: [StoreProviderDecorator({ user: { authUser: {} } })],
}

export const Dark: Story = {
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ user: { authUser: {} } }),
    ],
}

export const NoUserLigth: Story = {
    decorators: [StoreProviderDecorator({ user: {} })],
}

export const NoUserDark: Story = {
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ user: {} }),
    ],
}
