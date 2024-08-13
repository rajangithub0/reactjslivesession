import { useEffect, useState } from "react";

function UseCase1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('app components render');

    }, [])//using the sequre brcket this components render only one time
    useEffect(() => {
        console.log("count updated", count);

    }, [count]) //this is only render when the count value is changed

    useEffect(() => {
        console.log("name updated", name);

    }, [name])// this is only update when the name is changed
    return (
        <>
            <h1>welcome to react and vite</h1>
            <h2>counter value {count} {name} </h2>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>update count</button>
        </>
    );
}

export default UseCase1;