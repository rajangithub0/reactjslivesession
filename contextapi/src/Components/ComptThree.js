import React, { useContext } from 'react'
import { studentInfo, studentInfo1 } from '../App'

const ComptThree = (props) => {

    const f_name = useContext(studentInfo)
    const l_name = useContext(studentInfo1)

    return (
        <div>ComptThree
            <p>my name is useConstext is {f_name} {l_name}</p>
            {/* <studentInfo.Consumer>
                {(getf_name) => {
                    return <studentInfo1.Consumer>
                        {(getl_name) => { <h3> my name is {getf_name} {getl_name}</h3> }}
                    </studentInfo1.Consumer>
                }}
            </studentInfo.Consumer> */}
        </div>
    )
}

export default ComptThree