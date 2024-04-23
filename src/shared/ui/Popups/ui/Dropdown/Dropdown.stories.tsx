import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../../../Button/Button'

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
    args: {
        trigger: <Button>Click</Button>,
        items: [
            { content: '123' },
            { content: '123' },
            { content: '123' },
            { content: '123' },
        ],
    },
}
