import { useContext } from "react";
import { LoginContext } from "./LoginContext";


function Login() {
    const { Login } = useContext(LoginContext)
    return (
        <div>
            <h3>Login components</h3>
            <button onClick={Login}>Login</button>
        </div>
    );
}

export default Login;