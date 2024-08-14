import Users from "../Data/Users.json"

function UserList() {
    return (
        <div>
            {
                Users.map(user => (
                    <div id={user.id}>
                        <img src={user.URL} alt={user.id} height="50" />
                        <h1>Name: {user.name}</h1>
                        <h5>Country: {user.country}</h5>
                    </div>
                ))
            }
        </div>
    );
}

export default UserList;