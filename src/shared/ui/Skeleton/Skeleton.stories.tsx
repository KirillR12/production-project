import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const NormalRound: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
}

export const DarkRound: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const RedRound: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
    decorators: [ThemeDecorater(Theme.RED)],
}

export const Normal: Story = {
    args: {
        height: 100,
    },
}

export const Dark: Story = {
    args: {
        height: 100,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const Red: Story = {
    args: {
        height: 100,
    },
    decorators: [ThemeDecorater(Theme.RED)],
}
