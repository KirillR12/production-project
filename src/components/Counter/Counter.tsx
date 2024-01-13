import { useState } from "react"
import classes from './styles.module.scss'

export const Counter = () => {


    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            {counter}
            <button className={classes.btn} onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}