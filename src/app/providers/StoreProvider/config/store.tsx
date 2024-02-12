import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './ReducerManager'

export function createReduxStore(
    initialState: StateSchema,
    asyncReducer: ReducersMapObject<StateSchema>,
    // navigate: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject = {
        ...asyncReducer,
        counter: CounterReducer,
        user: UserReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        // navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    })

    // @ts-expect-error error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
