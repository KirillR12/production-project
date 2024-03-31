import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { AboutPage } from '..'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
}

export default meta
type Story = StoryObj<typeof AboutPage>;

export const Ligth: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
