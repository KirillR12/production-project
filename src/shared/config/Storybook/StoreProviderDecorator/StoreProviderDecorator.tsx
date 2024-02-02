/* eslint-disable */
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreProviderDecorator = (store: DeepPartial<StateSchema>) => (Story: any) => (
    <StoreProvider initialState={store}>
        {Story()}
    </StoreProvider>
)
