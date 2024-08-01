function Greeting({name}) {
    return ( 
        <>
        <h3>welcome  {name}</h3>
        </>
     );
}
Greeting.defaultProps={
    name:'Guest User'
}
export default Greeting;