import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test', () => {
    test('one param', () => {
        const params = getQueryParams({
            test: 'value',
        })
        expect(params).toBe('?test=value')
    })

    test('two params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'hello',
        })
        expect(params).toBe('?test=value&second=hello')
    })

    test('undefined param', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        })
        expect(params).toBe('?test=value')
    })
})
