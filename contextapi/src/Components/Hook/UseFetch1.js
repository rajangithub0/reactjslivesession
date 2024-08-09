import React from 'react'
import UseFetch from './UseFetch'

const UseFetch1 = () => {
    const [data] = UseFetch('https://jsonplaceholder.typicode.com/todos')
    return (
        <div>UseFetch1
            {
                data && data.map((item) => {
                    return <p key={item.id}>{item.title}</p>
                })
            }
        </div>

    )
}

export default UseFetch1