import PropTypes from 'prop-types'

function User({name,age,isStudent}) {
    return ( 
        <>
        <h3>name:{name}</h3>
        <p>
            Age:{age}
        </p>
        <p>
           Role {isStudent?'Employee':'Student'}
        </p>
        </>
     );
}

User.proptype={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent:PropTypes.bool
}

User.defaultProp={
    isStudent:false
}
export default User;