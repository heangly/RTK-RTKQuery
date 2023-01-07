import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../RTK/app/store'
import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from '../RTK/features/counterSlice'

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)

  const onResetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(+e.target.value ?? 0)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Add Amount
        </button>
        <button onClick={onResetAll}>Reset All</button>
      </div>
    </section>
  )
}

export default Counter
