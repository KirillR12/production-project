import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducer } = props

    // const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducer as ReducersMapObject<StateSchema>
        // navigate,
    )

    return <Provider store={store}>{children}</Provider>
}
