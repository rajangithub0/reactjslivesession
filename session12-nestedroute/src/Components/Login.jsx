import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ setLoggedIn }) => {
    const [user, setUser] = useState({
        email: '', password: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.email == "admin@gmail.com" && user.password == "admin123") {
            alert("login successfull")
            setLoggedIn(true)
            navigate('/dashboard')
        } else {
            alert("invalid value")
            setUser({ email: "", password: "" })
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <div classNameName='container'>
                <h2 className='text-center text-bg-success p-2'>Login form</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="example@note.com" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Enter password</label>
                        <input type="password" className="form-control" id="password" placeholder="*******" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>

                    <button type='submit' className='btn btn-primary w-100 mt-3'>Login</button>
                    <Link to='register' className='text-center nav-link'>Don,t you have account?</Link>
                </form>
            </div>
        </div>
    )
}

export default Login