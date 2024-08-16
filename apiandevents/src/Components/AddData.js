import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddData = () => {
    const [postdata, setPostdata] = useState()
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        axios.get(`${baseUrl}/1`)
            .then((response) => setPostdata(response.data))
    }, [])
    function createPost() {
        axios.post(baseUrl, {
            title: 'hello Student',
            body: "this is first demo website"
        }).then((response) => { setPostdata(response.data) })
    }
    if (!postdata) return 'nothing'
    return (
        <div>AddData
            {/* {postdata && postdata.map((item) => {
                return <li key={item.id}>
                    {item.title}
                    <ul>
                        <li>{item.body}</li>
                    </ul>
                </li>
            })} */}
            <h1>{postdata.title}</h1>
            <p>{postdata.body}</p>
            <button onClick={createPost}>CreatePost</button>
        </div>
    )
}

export default AddData