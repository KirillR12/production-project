import { ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18n from '@/shared/config/i18n/i18nForTest'
import { Theme } from '@/shared/const/theme'
// eslint-disable-next-line fedotov-fsd/layer-imports
import '@/app/styles/index.scss'
import { ThemeProvider } from '@/app/providers/ThemeProviders'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
    theme?: Theme.LIGHT
}

interface TestProviderProps {
    children: ReactNode
    options?: componentRenderOptions
}

export const TestProvider = (props: TestProviderProps) => {
    const { children, options = {} } = props

    const { route = '/', initialState, asyncReducer, theme } = options

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducer={asyncReducer}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider initialState={theme}>
                        <div className={`app ${theme}`}>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
export function componentRender(
    Component: ReactNode,
    option?: componentRenderOptions
) {
    return render(<TestProvider options={option}>{Component}</TestProvider>)
}
