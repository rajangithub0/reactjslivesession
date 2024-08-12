import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeComp() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div >
            <h1>{theme === "light" ? "light theme" : "dark theme"}</h1>
            <button onClick={toggleTheme}>toggleTheme</button>
        </div>
    );
}

export default ThemeComp;