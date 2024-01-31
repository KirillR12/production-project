import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { componentRender } from 'shared/lib/test/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
    test('test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        expect(screen.getByTestId('value')).toHaveTextContent('10')
    })

    test('test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        const toggleBtn = screen.getByTestId('increment')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('11')
    })

    test('test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        const toggleBtn = screen.getByTestId('decrement')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('9')
    })
})
