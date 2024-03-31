import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleSchema } from '@/entities/Article'
import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUsername'
import { AddCommentFormSchema } from '@/features/addCommentForm'
import { ProfileCardSchema } from '@/features/editableProfileCard'
import { ArticleDetaliPageSchema } from '@/pages/ArticleDetaliPage'
import { ArticlePageSchema } from '@/pages/ArticlePage'
import { rtkApi } from '@/shared/api/rtkApi'
import { ScrollSchema } from '@/widgets/Page'

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollPage: ScrollSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    login?: LoginSchema,
    profile?: ProfileCardSchema
    articleDetali?: ArticleSchema
    articleDetaliPage?: ArticleDetaliPageSchema
    addComment?: AddCommentFormSchema
    articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface reducerManagerSchema {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
reducerManager: reducerManagerSchema
}

export interface ThunkExtraArg {
   api: AxiosInstance,
//    navigate: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
