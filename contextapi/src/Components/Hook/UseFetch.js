import React, { useEffect, useState } from 'react'

const UseFetch = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data))
    })
    return (
        <div>UseFetch
            {
                data && data.map((item => {
                    return <p key={item.id}>{item.id}{item.title}</p>
                }))
            }
        </div>
    )
}

export default UseFetch