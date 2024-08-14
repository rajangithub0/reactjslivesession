import { useContext } from "react";
import { LoginContext } from "./LoginContext";


function Header() {
    const { loggedin, Logout } = useContext(LoginContext)
    return (
        <div>
            {
                !loggedin ? <>
                    {/* <button >Login</button> */}
                    <button>register</button>
                </> : <button onClick={Logout}>Logout</button>
            }

        </div>
    );
}

export default Header;