import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [password, setPassword] = useState('')
    const passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const [errors, setErrors] = useState({})
    const handlesubmlit = (e) => {
        e.preventDefault()

        const validationError = {};
        if (!email) {
            validationError.email = "email is required"
        } else if (!emailpattern.test(email)) {
            validationError.email = "email id is not valid"
        }
        if (!password) {
            validationError.password = "password is requires"
        } else if (!passwordpattern.test(password)) {
            validationError.password = 'password is invalid'
        }
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError)
        } else {
            setErrors({})
            alert("from is submited to approved")
        }
    }
    return (
        <div>
            <form onSubmit={handlesubmlit} noValidate>
                <h1 className='my-3 text-center p-2 text-bg-secondary'>Login Form</h1>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                    {errors.email && <div className='invalild-feedback'>{errors.email}</div>}
                </div>
                <div>
                    <label for="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="password" className={`form-control ${errors.password ? "is-invalid" : ''}`} onChange={(e) => setPassword(e.target.value)} value={password} />
                    {errors.password && <div className='invaild-feedback'>{errors.password}</div>}
                    <div id="passwordHelpBlock" classNameName="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                <button className='btn btn-danger mt-3 w-100' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login