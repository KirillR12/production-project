import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { ScrollReducer } from 'widgets/Page'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './ReducerManager'

export function createReduxStore(
    initialState: StateSchema,
    asyncReducer: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject = {
        ...asyncReducer,
        counter: CounterReducer,
        user: UserReducer,
        scrollPage: ScrollReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
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
