function Userdetails({selected}) {
    return ( 
        <>
        <h3>User Details Componts</h3>
        <h4>name:{selected.name}</h4>
        <p>
            email:{selected.email}<br />
            country:{selected.country} <br />
            id :{selected.id}
        </p>
        </>
     );
}

export default Userdetails;