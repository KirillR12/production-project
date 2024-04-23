import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const LIGTH: Story = {
    args: {},
}

export const DARK: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
