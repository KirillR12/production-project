import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useCounterAction } from '../model/slice/CounterSlice'
import { useCounter } from '../model/selectors/getCounter/getCounter'

export const Counter = () => {
    const { t } = useTranslation()
    const counterValue = useCounter()

    const { increment, decrement } = useCounterAction()

    const inc = () => {
        increment()
    }

    const dec = () => {
        decrement()
    }

    return (
        <div>
            <h1 data-testid="value">
                {counterValue}
            </h1>
            <Button
                data-testid="increment"
                theme={ButtonTheme.OUTLINE}
                onClick={inc}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement"
                theme={ButtonTheme.OUTLINE}
                onClick={dec}
            >
                {t('decrement')}
            </Button>
        </div>
    )
}
