/* eslint-disable */
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ArticleDetaliReducer } from 'entities/Article/model/slice/ArticleDetaliSlice/ArticleDetaliSlice'
import { ProfileReducer } from 'entities/Profile'
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { addCommentFormReducer } from 'features/addCommentForm'
import { ArticleCommentBlockReducer } from 'pages/ArticleDetaliPage'
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetali: ArticleDetaliReducer,
    articleComment: ArticleCommentBlockReducer,
    addComment: addCommentFormReducer
}

export const StoreProviderDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
    ) => (Story: any) => (
    <StoreProvider initialState={state} asyncReducer={{...defaultAsyncReducer, ...asyncReducer}}>
        {Story()}
    </StoreProvider>
)
