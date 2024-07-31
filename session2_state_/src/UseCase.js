import { useState } from "react";

function UseCase1() {
    const [name,setName]=useState('Rajan');//initial value
    const handleChange=()=>{
        setName('Monika');
    }
    return ( 
        <div>
            <h3>{name}</h3>
            <button onClick={handleChange}>Change Name</button>
        </div>
     );
}

export default UseCase1;