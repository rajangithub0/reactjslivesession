import React from 'react'
import { studentInfo, studentInfo1 } from '../App'

const ComptThree = () => {
    return (
        <div>ComptThree
            <studentInfo.Consumer>
                {(getf_name) => {
                    return <studentInfo1.Consumer>
                        {(getl_name) => { <h3> my name is {getf_name} {getl_name}</h3> }}
                    </studentInfo1.Consumer>
                }}
            </studentInfo.Consumer>
        </div>
    )
}

export default ComptThree