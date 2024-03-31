import type { Preview } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProviders'
import { RouterDecorator } from '@/shared/config/Storybook/RouterDecorator/RouterDecorator'
import { StoreProviderDecorator } from '@/shared/config/Storybook/StoreProviderDecorator/StoreProviderDecorator'
import { SuspenceDecorator } from '@/shared/config/Storybook/SuspenceDecorator/SuspenceDecorator'
import { ThemeDecorater } from '@/shared/config/Storybook/ThemeDecorater/ThemeDecorater'
import { StylesDecorator } from '@/shared/config/Storybook/StylesDecorator/StylesDecorator'

const preview: Preview = {
    decorators: [
        ThemeDecorater(Theme.LIGHT),
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
    },
}

export default preview
