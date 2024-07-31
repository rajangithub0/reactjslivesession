function Display(props) {
    const {user}=props;
    console.log(user)
    return ( 
        <>
        <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <p>{user.age}</p>
            <p>{user.country}</p>
        </div>
        </>
     );
}

export default Display;