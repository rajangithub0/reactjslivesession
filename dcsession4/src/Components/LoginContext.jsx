import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

    const [loggedin, setLoggedin] = useState(false)
    const Login = () => {
        setLoggedin(true)
    }
    const Logout = () => {
        setLoggedin(false)
    }
    return (
        <LoginContext.Provider value={{ loggedin, Login, Logout }}>
            {children}
        </LoginContext.Provider>
    )
}