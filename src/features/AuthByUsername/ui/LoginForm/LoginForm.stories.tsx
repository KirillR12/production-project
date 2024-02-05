import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { StoreProviderDecorator } from 'shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ login: { username: 'admin', password: '123' } }),
    ],
}

export const Error: Story = {
    args: {},
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ login: { error: 'error' } }),
    ],
}

export const Loading: Story = {
    args: {},
    decorators: [
        ThemeDecorater(Theme.DARK),
        StoreProviderDecorator({ login: { isLoading: true } }),
    ],
}
