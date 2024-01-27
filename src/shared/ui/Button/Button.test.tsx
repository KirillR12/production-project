import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button', () => {
test('test Button', () => {
  render(<Button>TEST</Button>)
  expect(screen.getByText('TEST')).toBeInTheDocument()
  screen.debug()
})
})