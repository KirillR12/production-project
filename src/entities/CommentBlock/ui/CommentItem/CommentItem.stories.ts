import type { Meta, StoryObj } from '@storybook/react'
import { CommentItem } from './CommentItem'

const meta: Meta<typeof CommentItem> = {
    title: 'entities/CommentItem',
    component: CommentItem,
}

export default meta
type Story = StoryObj<typeof CommentItem>

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: '123',
            user: {
                username: 'admin',
                id: '1',
                avatar: '',
            },
        },
    },
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
