import axios from 'axios'
import React, { useState } from 'react'

const UserFrom = ({ fetchData }) => {
    const [user, setUser] = useState({ name: "", email: "", username: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const resp = await fetch('http://localhost:5000/api/user', {
        //     method: "POST",
        //     body: JSON.stringify(user),
        //     headers: {
        //         "content-type": "application/json"
        //     }
        // }); // this type of connect using fetch method
        const resp = await axios.post('http://localhost:5000/api/user', user)
        if (resp.status == 201) {
            alert('user Register')
            fetchData()
        } else {
            alert('error orrured')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label >Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div>
                    <label>UserName</label>
                    <input type="text" placeholder='Enter Username' className='form-control' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                </div>
                <div>
                    <label >Email</label>
                    <input type="text" placeholder='enter Email' className='form-control' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" placeholder='EnterPassword' className='form-control' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <button type='submit' className='btn btn-primary mt-3'>Register</button>
            </form>
        </div>
    )
}

export default UserFrom