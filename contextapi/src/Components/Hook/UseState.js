import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            this is use state.
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <span>{count}</span>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default UseState