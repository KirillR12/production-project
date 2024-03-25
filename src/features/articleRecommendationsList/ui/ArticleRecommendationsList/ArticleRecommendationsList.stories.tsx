import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const article = {
    id: '1',
    title: 'string',
    subtitle: 'string',
    img: '...',
    user: {
        username: 'kirill',
        avatar: '...',
        id: '1',
    },
    views: 12,
    createdAt: '12.03.23',
    type: [],
    blocks: [],
}

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
}

export default meta
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
    args: {},
    decorators: [],
}
