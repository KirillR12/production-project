import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
}

export default meta
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
    },
}

export const Clear: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.CLEAR,
    },
}

export const Outline: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.OUTLINE,
    },
}

export const OutlineDARK: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}
