import React, { createContext, useEffect, useState } from 'react'

export const Test = createContext({})
const Export = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        setTheme(localStorage.getItem("theme"))
    }, []);
    const toggleTheme = () => {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <Test.Provider value={{ theme, toggleTheme }}>
            {children}
        </Test.Provider>
    )
}

export default Export;