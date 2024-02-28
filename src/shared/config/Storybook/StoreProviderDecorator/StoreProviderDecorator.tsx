/* eslint-disable */
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ArticleDetaliReducer } from 'entities/Article/model/slice/ArticleDetaliSlice/ArticleDetaliSlice'
import { ProfileReducer } from 'entities/Profile'
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetali: ArticleDetaliReducer
}

export const StoreProviderDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
    ) => (Story: any) => (
    <StoreProvider initialState={state} asyncReducer={{...defaultAsyncReducer, ...asyncReducer}}>
        {Story()}
    </StoreProvider>
)
