import type { Meta, StoryObj } from '@storybook/react'
import avatar from '@/shared/assets/test/avatarTest.png'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Small: Story = {
    args: {
        src: avatar,
        size: 100,
        alt: '.',
    },
}

export const Large: Story = {
    args: {
        src: avatar,
        size: 200,
        alt: '.',
    },
}
