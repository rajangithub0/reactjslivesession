import { useEffect } from "react";
import { useState } from "react";
import Details from "./Details";

function UsersData() {
    const [users, setUsers] = useState([])
    const [selected, setSelect] = useState(null)
    const fetchData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await resp.json()
            setUsers(json)
        }
        catch (error) {
            console.log("massage", error);
        }
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <ul>
                {
                    users.map(item => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => setSelect(item)}>View Data</button>
                        </li>
                    ))
                }
            </ul>
            {selected && <Details user={selected} />}
        </div>
    );
}

export default UsersData;