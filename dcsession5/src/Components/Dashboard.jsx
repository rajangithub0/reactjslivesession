import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UsersList from './UsersList'
import Products from './Products'

const Dashboard = () => {
    return (
        <div classNameName='container'>
            <h2>welcome to Dashboard</h2>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to='list'>Mange users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='products'>Mange products</Link>
                </li>
                <Routes>
                    <Route path='list' element={<UsersList />} />
                    <Route path='products' element={<Products />} />
                </Routes>

            </ul>
        </div>
    )
}

export default Dashboard