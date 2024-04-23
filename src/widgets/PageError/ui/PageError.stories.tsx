import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
}

export default meta
type Story = StoryObj<typeof PageError>

export const LIGTH: Story = {
    args: {},
}

export const DARK: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
