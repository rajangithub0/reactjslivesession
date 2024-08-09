import React, { useEffect } from 'react'



const UseEffect = (props) => {
    console.log("render again");
    useEffect(() => {
        console.log(`the name is ${props.name}`);
    }, [props.name])
    return (
        <div>UseEffect</div>
    )
}

export default UseEffect