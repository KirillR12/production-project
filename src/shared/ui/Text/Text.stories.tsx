import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from 'app/providers/ThemeProviders'
import { Text, TextTheme } from './Text'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
}

export default meta
type Story = StoryObj<typeof Text>;

export const OnlyText: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
    },
}

export const OnlyTextDark: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const OnlyTextError: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        theme: TextTheme.ERROR,
    },
}

export const OnlyTextErrorDark: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}
