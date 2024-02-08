/* eslint-disable */
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ProfileReducer } from 'entities/Profile'
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer,
    profile: ProfileReducer
}

export const StoreProviderDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
    ) => (Story: any) => (
    <StoreProvider initialState={state} asyncReducer={{...defaultAsyncReducer, ...asyncReducer}}>
        {Story()}
    </StoreProvider>
)
