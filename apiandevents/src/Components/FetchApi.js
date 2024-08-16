import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return (
        <div>FetchApi
            {data && data.map((item) => {
                return <p key={item.id}>{item.id}{item.title}</p>
            })}
        </div>
    )
}

export default FetchApi