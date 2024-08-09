import React, { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ""
    })

    const printValue = () => {

        console.log(form.username, form.password);

    }

    const updateValue = e => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }
    return (
        <>
            <form onSubmit={printValue}>
                <div>Login</div>
                <label htmlFor='username'> username</label>
                <input type='text' onChange={updateValue} value={form.username} name='username' id='username' />
                <label htmlFor='password'>Password</label>
                <input type="password" onChange={updateValue} value={form.password} name='password' id='password' />
                <button >submit</button>
            </form>
        </>
    )
}

export default Login