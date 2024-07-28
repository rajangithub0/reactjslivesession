import { useState } from "react";

function From(props) {
    const {addData}=props;
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const handleClick=()=>{
        addData({name,age})
        setAge('')
        setName('')
    }
    return (  
        <div>
            <input type="text" placeholder="enter a name" onChange={(e)=>setName(e.target.value)} value ={name} />
            <input type="text" placeholder="enter a age" onChange={(e)=>setAge(e.target.value)} value={age} />
            <button onClick={handleClick}>Save Data</button>
        </div>
    );
}

export default From;