import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
    args: {
        src: 'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Lion-Avatar-icon.png',
        size: 100,
        alt: '.',
    },
}

export const Large: Story = {
    args: {
        src: 'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Lion-Avatar-icon.png',
        size: 200,
        alt: '.',
    },
}
