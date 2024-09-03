import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, incement, incrementByAmount } from '../redux/counterslice'

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>Counter {count}
            <button onClick={() => dispatch(incement())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+(5)</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>-(5)</button>
        </div>
    )
}

export default Counter