import { useState } from "react";

function UserForm({addData}) {
    const [user,setUser]=useState({name:"",email:"",country:""})
    const handlesubmit=()=>{
        if(user.email==""||user.name==""||user.country==""){
             alert("all input are empty")
        }else{
        user.id=Date.now()
        addData(user)//pass the full user object child to parent
        alert('user added successfully')
        setUser({name:"",email:"",country:""})
        }
    }
    return ( 
    <>
    <h3>user form componts</h3>
    <input type="text" placeholder="Name"className="form-control mt-3" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} />
    <input type="text" placeholder="Email"className="form-control mt-3" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
    <input type="text" placeholder="Country"className="form-control mt-3" value={user.country} onChange={(e)=>setUser({...user,country:e.target.value})} />
    <button className="btn btn-primary my-3 w-100" onClick={handlesubmit}>Add User</button>    
    </> );
}

export default UserForm;