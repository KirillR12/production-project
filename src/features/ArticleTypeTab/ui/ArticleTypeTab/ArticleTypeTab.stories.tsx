import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTypeTab } from './ArticleTypeTab'

const meta: Meta<typeof ArticleTypeTab> = {
    title: 'features/ArticleTypeTab',
    component: ArticleTypeTab,
}

export default meta
type Story = StoryObj<typeof ArticleTypeTab>;

export const Primary: Story = {
    args: {},
}
