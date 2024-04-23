import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { componentRender } from '@/shared/lib/test/componentRender/componentRender'
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
        expect(screen.getByTestId('CommentList.Comp')).toBeInTheDocument()
    })

    test('loading', () => {
        componentRender(<CommentList isLoading />)
        expect(screen.getByTestId('CommentList.Loading')).toBeInTheDocument()
    })

    test('error', () => {
        componentRender(<CommentList error="error" />)
        expect(screen.getByTestId('CommentList.Error')).toBeInTheDocument()
    })
})
