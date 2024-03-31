import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { Theme } from '@/app/providers/ThemeProviders'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
        isOpen: true,
    },
}

export const Dark: Story = {
    args: {
        children: 'TEXT',
        isOpen: true,
    },
    decorators: [ThemeDecorater(Theme.DARK)],
}
