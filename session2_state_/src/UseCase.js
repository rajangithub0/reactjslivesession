import { useState } from "react";

function UseCase1() {
    const [name, setName] = useState('Alex');//initial value
    const handleChange = () => {
        setName('Bob');
    }
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={handleChange}>Change Name</button>
        </div>
    );
}

export default UseCase1;