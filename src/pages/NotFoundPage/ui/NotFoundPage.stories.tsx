import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const Ligth: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
