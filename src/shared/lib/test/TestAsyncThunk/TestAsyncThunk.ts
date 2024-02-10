/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreaterType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>

    getState: () => StateSchema

    actionCreater: ActionCreaterType<Return, Arg, RejectedValue>

    api: jest.MockedFunctionDeep<AxiosStatic>

    // navigate: jest.MockedFn<any>

    constructor(actionCreater: ActionCreaterType<Return, Arg, RejectedValue>) {
        this.actionCreater = actionCreater
        this.dispatch = jest.fn()
        this.getState = jest.fn()

        this.api = mockedAxios
        // this.navigate = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreater(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api },
        )

        return result
    }
}
