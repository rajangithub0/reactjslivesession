function Greeting(props) {
    const data1=props.name;
    //data coming from the app.js file to greeting compoenets
    const data2=props.massage;

    return (  
        <>
        <h1>name: {data1}</h1>
        <p>massage: {data2}</p>
        </>
    );
}

export default Greeting;
