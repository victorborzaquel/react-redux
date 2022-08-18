import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, selectCount } from "./counterSlice"

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2')

  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <input type="number" value={incrementAmount} onChange={e => setIncrementAmount(e.currentTarget.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>OK</button>
      </div>
    </div>
  )
}