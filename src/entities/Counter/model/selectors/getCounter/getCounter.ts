import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/store'

export const [useCounter, getCounter] = buildSelector((state: StateSchema) => state.counter.value)
