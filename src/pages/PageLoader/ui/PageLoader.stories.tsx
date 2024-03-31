import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { PageLoader } from './PageLoader'

const meta: Meta<typeof PageLoader> = {
    title: 'shared/PageLoader',
    component: PageLoader,
}

export default meta
type Story = StoryObj<typeof PageLoader>;

export const LIGTH: Story = {
    args: {
    },
}

export const DARK: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const RED: Story = {
    decorators: [ThemeDecorater(Theme.RED)],
}
