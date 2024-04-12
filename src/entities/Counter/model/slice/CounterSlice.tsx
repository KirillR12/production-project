import { buildSlice } from '@/shared/store/buildSlice'
import { CounterSchema } from '../types/CounterSchema'

const initialState: CounterSchema = {
    value: 0,
}

export const CounterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})

export const {
    actions: CounterActions,
    reducer: CounterReducer,
    useActions: useCounterAction,
} = CounterSlice
