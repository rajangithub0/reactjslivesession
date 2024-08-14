function Details({ user })
// { props } { // if i write a props without curly brecket yhen we write a a de structute
//     const user = props.user // one type of destructure
//     const { user } = props; //second type of destructure
// }


{
    return (
        <>
            <h3>Username{user.name}</h3><br />
            <p>UserEmail{user.email}<br />,
                Address{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}<br />
                Website {user.website}<br />
                Phone {user.phone}<br />
                Company {user.company.name}

            </p>

        </>
    );
}

export default Details;