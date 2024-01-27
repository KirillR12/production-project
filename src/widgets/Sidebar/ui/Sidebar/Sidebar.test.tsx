import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation'

describe('Siderbar', () => {
test('test', () => {
  renderWithTranslation(<Sidebar/>)
  expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  screen.debug()
})

test('test', () => {
  renderWithTranslation(<Sidebar/>)
  const toggleBtn = screen.getByTestId('sidebar-button')
  expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  fireEvent.click(toggleBtn)
  expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  screen.debug()
})
})