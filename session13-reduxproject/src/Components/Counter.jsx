import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch();
    const handleinc = () => {
        dispatch({ type: "INCREMENT" })
    }
    const handledec = () => {
        dispatch({ type: "DECREMENT" })
    }
    return (
        <div>
            <h3>Counter application</h3>
            Counter :{count}<br />
            <br />
            <button onClick={handleinc}>Increment</button>
            <button onClick={handledec}>Decrement</button>
        </div>
    )
}

export default Counter