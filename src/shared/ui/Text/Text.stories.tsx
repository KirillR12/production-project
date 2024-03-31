import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import {
    Text, TextAlign, TextSize, TextTheme,
} from './Text'

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

export const TextCenter: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        theme: TextTheme.ERROR,
        align: TextAlign.CENTER,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const TextLeft: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        theme: TextTheme.ERROR,
        align: TextAlign.LEFT,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const TextRigth: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        theme: TextTheme.ERROR,
        align: TextAlign.RIGTH,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const TextM: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        size: TextSize.M,
    },
}

export const TextL: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        size: TextSize.L,
    },
}

export const TextS: Story = {
    args: {
        title: 'Title appearance check',
        text: 'Text appearance check variables',
        size: TextSize.S,
    },
}
