import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersList = () => {
    const [users, setUsers] = useState([])
    const fetchData = async () => {
        try {

            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(resp.data)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='container'>
            <h1 className='p-2 text-center text-bg-secondary'>UsersList</h1>
            <table className='table table-striped table-border'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList