import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { Button, ButtonSize, ButtonTheme } from './Button'

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
        theme: ButtonTheme.CLEAR,
    },
}

export const ClearInverted: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
}

export const Outline: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
}

export const OutlineDARK: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}

export const Background: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND,
    },
}

export const BackgroundInverted: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
}

export const SquareM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
}

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,

        size: ButtonSize.L,

    },
}

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
}

export const SizeM: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
}

export const SizeL: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
}

export const SizeXL: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
}

export const DisableBtn: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        disabled: true,
    },
}
