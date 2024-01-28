import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { componentRender } from 'shared/lib/test/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('Siderbar', () => {
    test('test', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })

    test('test', () => {
        componentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-button')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()
    })
})
