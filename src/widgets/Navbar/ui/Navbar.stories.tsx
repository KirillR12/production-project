import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { StoreProviderDecorator } from '@/shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const LIGTH: Story = {
    decorators: [StoreProviderDecorator({ user: { authUser: undefined } })],
}

export const DARK: Story = {
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ user: { authUser: undefined } }),
    ],
}

export const LogOut: Story = {
    decorators: [StoreProviderDecorator({ user: { authUser: {} } })],
}

export const LogOutDark: Story = {
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ user: { authUser: {} } }),
    ],
}
