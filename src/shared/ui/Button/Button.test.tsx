<<<<<<< HEAD
import { render, screen } from '@testing-library/react'
=======
import {render, screen} from '@testing-library/react'
>>>>>>> origin/main
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button', () => {
<<<<<<< HEAD
    test('test Button', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
        screen.debug()
    })
})
=======
test('test Button', () => {
  render(<Button>TEST</Button>)
  expect(screen.getByText('TEST')).toBeInTheDocument()
  screen.debug()
})
})
>>>>>>> origin/main
