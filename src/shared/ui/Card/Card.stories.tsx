import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { Card } from './Card'
import { Text } from '../Text/Text'

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
}

export default meta
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
    args: {
        children: <Text title="Title" text="Text text" />,
    },
}

export const Dark: Story = {
    args: {
        children: <Text title="Title" text="Text text" />,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const Red: Story = {
    args: {
        children: <Text title="Title" text="Text text" />,
    },
    decorators: [ThemeDecorater(Theme.RED)],
}
