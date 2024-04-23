import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,
}

export default meta
type Story = StoryObj<typeof CommentList>

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: '123',
                user: {
                    username: 'admin',
                    id: '1',
                    avatar: '',
                },
            },
            {
                id: '2',
                text: '1234',
                user: {
                    username: 'user',
                    id: '2',
                    avatar: '',
                },
            },
        ],
    },
}

export const Error: Story = {
    args: {
        error: 'error',
    },
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
