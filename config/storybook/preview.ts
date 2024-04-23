import type { Preview } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProviders'
import { RouterDecorator } from '@/shared/config/Storybook/RouterDecorator/RouterDecorator'
import { StoreProviderDecorator } from '@/shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import { SuspenceDecorator } from '@/shared/config/Storybook/SuspenceDecorator/SuspenceDecorator'
import { StylesDecorator } from '@/shared/config/Storybook/StylesDecorator/StylesDecorator'

const preview: Preview = {
    decorators: [
        // ThemeDecorater(Theme.LIGHT),
        RouterDecorator,
        StylesDecorator,
        SuspenceDecorator,
        StoreProviderDecorator({}),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        themes: {
            default: 'ligth',
            list: [
                {
                    name: 'ligth',
                    class: ['app', Theme.LIGHT],
                    color: '#f4f4fb',
                },
                { name: 'dark', class: ['app', Theme.DARK], color: '#000484' },
                { name: 'orange', class: ['app', Theme.RED], color: '#8f21ff' },
            ],
        },
    },
}

export default preview
