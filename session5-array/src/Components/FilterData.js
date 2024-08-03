import { useState } from "react";

function FilterData() {
    const [showOnline, setShowOnline] = useState(true)
    const user = [
        { id: 1, name: "rajan", online: true },
        { id: 2, name: "ekaansh", online: false },
        { id: 3, name: "chandni", online: true },
        { id: 4, name: "anu", online: false },
        { id: 5, name: "rohan", online: true }
    ]
    const fileredUsers = user.filter(user => user.online === showOnline)
    return (
        <div>
            <h2 className="mt-3 p-2 text-center text-bg-secondary">user's list</h2>
            <button className="btn btn-primary w-100" onClick={() => setShowOnline(!showOnline)}>{showOnline ? "show Offline" : "show Online"}</button>
            <ul className="list-group">
                {
                    fileredUsers.map(user => (
                        <li className="list-group-item" key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FilterData;