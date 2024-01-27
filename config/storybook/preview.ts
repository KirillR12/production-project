import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/Storybook/RouterDecorator/RouterDecorator'
import { StylesDecorator } from 'shared/config/Storybook/StylesDecorator/StylesDecorator'
import { ThemeDecorater } from 'shared/config/Storybook/ThemeDecorater/ThemeDecorater'

const preview: Preview = {
    decorators: [
        ThemeDecorater(Theme.LIGHT),
        RouterDecorator,
        StylesDecorator,
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
