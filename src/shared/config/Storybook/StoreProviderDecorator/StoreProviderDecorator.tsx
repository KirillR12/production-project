/* eslint-disable */
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { ArticleDetaliReducer } from '@/entities/Article'
import { LoginReducer } from '@/features/AuthByUsername/model/slice/LoginSlice'
import { addCommentFormReducer } from '@/features/addCommentForm'
import { ProfileReducer } from '@/features/editableProfileCard'
import {  articleDetaliReducer } from '@/pages/ArticleDetaliPage'
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetaliPage: articleDetaliReducer,
    addComment: addCommentFormReducer,
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
