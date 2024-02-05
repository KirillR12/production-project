import { DeepPartial, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './ReducerManager'

export function createReduxStore(initialState: StateSchema, asyncReducer: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: CounterReducer,
        user: UserReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-expect-error error
    store.reducerManager = reducerManager

    return store
}
