import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { MainPage } from '..'

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
}

export default meta
type Story = StoryObj<typeof MainPage>;

export const Ligth: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorater(Theme.DARK)],
}
