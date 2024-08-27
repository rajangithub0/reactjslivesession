import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <div classNameName='container'>
                <h2 className='text-center text-bg-success p-2'>Login form</h2>
                <form>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="example@note.com" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Enter password</label>
                        <input type="password" className="form-control" id="password" placeholder="*******" />
                    </div>

                    <button className='btn btn-primary w-100 mt-3'>Login</button>
                    <Link to='register' className='text-center nav-link'>Don,t you have account?</Link>
                </form>
            </div>
        </div>
    )
}

export default Login