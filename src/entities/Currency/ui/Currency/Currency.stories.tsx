import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from './Currency'

const meta: Meta<typeof Currency> = {
    title: 'entities/Currency',
    component: Currency,
}

export default meta
type Story = StoryObj<typeof Currency>;

export const Primary: Story = {
    args: {},
}
