import type { Meta, StoryObj } from '@storybook/react'
import { Country } from './Country'

const meta: Meta<typeof Country> = {
    title: 'entities/Country',
    component: Country,
}

export default meta
type Story = StoryObj<typeof Country>

export const Primary: Story = {
    args: {},
}
