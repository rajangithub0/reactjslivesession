import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div classNameName='container'>
            <h2 className='text-center text-bg-warning p-2'>Registerstion form</h2>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Enter name</label>
                    <input type="text" className="form-control" id="name" placeholder="john doe" />
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">Enter username</label>
                    <input type="text" className="form-control" id="username" placeholder="johndoe1" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Enter password</label>
                    <input type="password" className="form-control" id="password" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="SECRET" />
                </div>
                <button className='btn btn-primary w-100 mt-3'>Register</button>

            </form>
            <Link to='/login' className='text-center nav-link'>Do you have an account click hear</Link>
        </div>
    )
}

export default Register