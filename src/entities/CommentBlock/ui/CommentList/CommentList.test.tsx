import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { componentRender } from 'shared/lib/test/componentRender/componentRender'
import { CommentList } from './CommentList'

const comment = {
    id: '1',
    text: 'string',
    user: {
        username: 'kirill',
        id: '1',
    },
}

describe('Counter', () => {
    test('comment', () => {
        componentRender(<CommentList comments={[comment]} />)
        expect(screen.getByTestId('comment.Flex')).toBeInTheDocument()
    })

    test('loading', () => {
        componentRender(<CommentList isLoading />)
        expect(screen.getByTestId('loading.Flex')).toBeInTheDocument()
    })

    test('error', () => {
        componentRender(<CommentList error="error" />)
        expect(screen.getByTestId('error.Flex')).toBeInTheDocument()
    })
})
