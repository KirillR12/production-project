import { classNames } from "shared/lib/classNames/classNames"


describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2 class3'
        expect(classNames('someClass', {}, ['class1', 'class2', 'class3'])).toBe(expected)
    })

    test('with mods class', () => {
        const expected = 'someClass class1 hovered'
        expect(classNames('someClass', { hovered: true }, ['class1'])).toBe(expected)
    })

    test('with mods class', () => {
        const expected = 'someClass class1 hovered'
        expect(classNames('someClass', { hovered: true, scrollble: false }, ['class1'])).toBe(expected)
    })

    test('with mods class', () => {
        const expected = 'someClass class1 hovered'
        expect(classNames('someClass', { hovered: true, scrollble: undefined }, ['class1'])).toBe(expected)
    })
})
