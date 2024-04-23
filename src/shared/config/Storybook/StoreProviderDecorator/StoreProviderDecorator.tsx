import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { ArticleDetaliReducer } from '@/entities/Article/testing'
import { LoginReducer } from '@/features/AuthByUsername/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { ProfileReducer } from '@/features/editableProfileCard/testing'
import { articleDetaliReducer } from '@/pages/ArticleDetaliPage/testing'
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetaliPage: articleDetaliReducer,
    addComment: addCommentFormReducer,
    articleDetali: ArticleDetaliReducer,
}

export const StoreProviderDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (Story: any) => (
        <StoreProvider
            initialState={state}
            asyncReducer={{ ...defaultAsyncReducer, ...asyncReducer }}
        >
            {Story()}
        </StoreProvider>
    )
