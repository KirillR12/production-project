import { Decorator } from '@storybook/react'
import { Suspense } from 'react'
import { MemoryRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (Story) => (
    <Suspense fallback="...">
        <MemoryRouter>
            {Story()}
        </MemoryRouter>
    </Suspense>
)
