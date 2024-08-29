import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState()
  const fetchData = async () => {
    try {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUser(resp.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='container'>
      <h2>UserDetails for :{id}</h2>
      {
        user ? <>
          <h2>Welcome {user.name}</h2>
          <p>
            UserName: {user.username}<br />
            email: {user.email}<br />
            phone: {user.phone}<br />
            website: {user.website}<br />
            Address: {user.address.street} <br />
            {user.address.suite}<br />
            {user.address.city}<br />
            Zipcode: {user.zipcode}
          </p>
          <h6>Company details</h6>
          <p>
            CompnayName: {user.company.name}<br />
            {user.company.catchPhrase}<br />
            {user.company.bs}<br />
          </p>
        </> : <p>Loading.....</p>
      }
    </div>
  )
}

export default UserDetails