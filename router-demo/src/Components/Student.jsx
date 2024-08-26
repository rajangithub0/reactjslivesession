import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    const params = useParams()
    const { id } = params
    return (
        <div>
            <h1>this is student {id}</h1>
        </div>

    )
}

export default Student