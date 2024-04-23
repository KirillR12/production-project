import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'TEXT',
    },
}

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'TEXT',
    },
}

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
        children: 'TEXT',
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const PrimaryDARK: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'TEXT',
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const SecondaryDARK: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'TEXT',
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const RedDARK: Story = {
    args: {
        theme: AppLinkTheme.RED,
        children: 'TEXT',
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}
