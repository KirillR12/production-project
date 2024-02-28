import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleSchema } from 'entities/Article'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { addCommentFormSchema } from 'features/addCommentForm'
import { ArticleCommentSchema } from 'pages/ArticleDetaliPage'

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login?: LoginSchema,
    profile?: ProfileSchema
    articleDetali?: ArticleSchema
    articleComment?: ArticleCommentSchema
    addComment?: addCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface reducerManagerSchema {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void
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
