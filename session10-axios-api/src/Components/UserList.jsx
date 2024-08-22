import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import UserFrom from './UserFrom'

export const UserList = () => {
    const [users, setUsers] = useState([])
    const fetchData = async () => {
        try {

            const resp = await axios.get('http://localhost:5000/api/user')
            setUsers(resp.data)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const deleteUser = async (id) => {
        await axios.delete('http://localhost:5000/api/user/' + id)
        alert("delete successfully ")
        fetchData();
        setUsers[{ name: '', email: '', username: '', password: "" }]
    }
    return (
        <div>
            <h3>user list components</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Username</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(item => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td><button className='btn btn-danger' onClick={() => deleteUser(item._id)}>delete</button></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
            <UserFrom fetchData={fetchData} />
        </div>
    )
}
