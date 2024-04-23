import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
    args: {
        options: [
            { value: 'RUB', content: 'RUB' },
            { value: 'USD', content: 'USD' },
            { value: 'EUR', content: 'EUR' },
        ],
    },
}
