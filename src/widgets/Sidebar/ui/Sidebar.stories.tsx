import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
}

export default meta
type Story = StoryObj<typeof Sidebar>;

export const LIGTH: Story = {
    args: {
    },
}

export const DARK: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
