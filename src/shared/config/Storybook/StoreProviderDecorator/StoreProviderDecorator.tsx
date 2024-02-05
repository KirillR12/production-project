/* eslint-disable */
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer
}

export const StoreProviderDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
    ) => (Story: any) => (
    <StoreProvider initialState={state} asyncReducer={{...defaultAsyncReducer, ...asyncReducer}}>
        {Story()}
    </StoreProvider>
)
