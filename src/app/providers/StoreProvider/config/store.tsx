import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
