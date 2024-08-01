import { useState } from "react";
import Userdetails from "./Userdetails";
import UserForm from "./Userform";

function Userlist() {
    const [users,setUsers]=useState([])
    const [selected,setSelected]=useState(null)
    const addData=(obj)=>{
        setUsers([...users,obj]);
    }

    const deleteUser=(id)=>{
        setUsers(users.filter(item=>item.id!==id))
        setSelected(null)
    }
    return ( 
    <div className="p-3"style={{border:'2px solid blue'}}>
    
    <h3>User List componts</h3>
    <table className="table table-bordered table striped">
        <thead>
            <tr><th>Name</th><th>Email</th><th>Operations</th></tr>
        </thead>
        <tbody>
            {
                users.map(item=>(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <button className="btn btn-success" onClick={()=>setSelected(item)}>View</button>
                            <button className="btn btn-danger ms-3" onClick={()=>deleteUser(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
   
    <div className="row">
        <div className="col" style={{border:'2px solid green'}}>
        <UserForm  addData={addData}/>
        </div>
        <div className="col" style={{border:'2px solid red'}}>
        {selected &&
        <Userdetails  selected={selected} />
        }
        </div>
    </div>
    
    
    </div>
 );
}

export default Userlist;