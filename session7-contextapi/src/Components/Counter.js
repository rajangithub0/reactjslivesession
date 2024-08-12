import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

function Counter() {
    const { count, setCount } = useContext(CounterContext)
    return (
        <div>
            <h1>counter app</h1>
            <button onClick={() => setCount(count + 1)}>update</button>
        </div>
    );
}

export default Counter;