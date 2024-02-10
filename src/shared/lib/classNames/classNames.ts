type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, addition: Array<string | undefined> = []): string {
    return [
        cls,
        ...addition.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ')
}
