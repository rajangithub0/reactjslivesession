import { useState } from "react";

function FetchData() {
    const [users, setUsers] = useState([])
    const handleclick = async () => {
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await resp.json();
            setUsers(json)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <button className="btn btn-primary" onClick={handleclick}>GetData</button>
            <div className="row mt-2">
                {
                    users.map(user => (
                        <div className="col-md-4" key={user.id}>
                            <div className="card mb-2" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">Email:{user.email}</p><br />
                                    Address:{user.address.street},{user.address.suite},{user.address.city},
                                    {user.address.zipcode}<br />
                                    website :{user.website} <br />
                                    phone :{user.phone}
                                    <a href="#" className="btn btn-primary">{user.company.name}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchData;