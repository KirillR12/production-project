// import axios from 'axios'
// import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'
// import { ProfileThunk } from './ProfileThunk'

// jest.mock('axios')

// const mockedAxios = jest.mocked(axios, true)

// describe('ProfileSaveEditThunk', () => {
//     test('login succes ', async () => {
//         const dataProfile = { first: 'kirill', lastname: 'fedotov' }
//         const thunk = new TestAsyncThunk(ProfileThunk)
//         thunk.api.get.mockReturnValue(Promise.resolve({ data: dataProfile }))

//         const result = await thunk.callThunk()

//         expect(thunk.dispatch).toHaveBeenCalledTimes(2)
//         expect(mockedAxios.get).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('fulfilled')
//         expect(result.payload).toEqual(dataProfile)
//     })

//     test('login error', async () => {
//         const thunk = new TestAsyncThunk(ProfileThunk)

//         thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

//         const result = await thunk.callThunk()

//         expect(thunk.dispatch).toHaveBeenCalledTimes(2)
//         expect(mockedAxios.get).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('rejected')
//         expect(result.payload).toBe('error')
//     })
// })
