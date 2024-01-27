import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>;

export const LIGTH: Story = {
    args: {
    },
}

export const DARK: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
