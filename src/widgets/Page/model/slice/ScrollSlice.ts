import {
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit'
import { ScrollSchema } from '../types/ScrollSchema'

const initialState: ScrollSchema = {
    scroll: {},
}

const ScrollSlice = createSlice({
    name: 'ScrollSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position
        },
    },
})

export const { actions: ScrollActions } = ScrollSlice
export const { reducer: ScrollReducer } = ScrollSlice
