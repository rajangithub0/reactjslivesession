import React, { useState } from 'react'

const FormData = () => {
    const [name, setname] = useState('');

    const showName = (event) => {
        event.preventDefault();
        alert(`this name is :${name}`)
    }
    return (
        <div>FormData
            <form onSubmit={showName} >
                <label>enter your name
                    <input type='text' value={name} onChange={(e) => setname(e.target.value)}></input>
                </label>
                <input type='submit' />
            </form>
        </div>
    )
}

export default FormData