
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, addition: string[]): string {

return [
    cls,
    ...addition.filter(Boolean),
    ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className)
]
.join(' ')
}