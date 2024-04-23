import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'

const rating = {
    rate: 2,
    feedback: 'string',
}

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [rating],
            },
        ],
    },
}

export default meta
type Story = StoryObj<typeof ArticleRating>

export const Primary: Story = {
    args: {
        id: '2',
    },
}
