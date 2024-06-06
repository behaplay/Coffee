import React, { createContext, useEffect, useState } from 'react'

export const Translate = createContext("")

const Translater = ({ children }) => {
    
    const [translatelanguages, setTranslatelanguages] = useState("")
    useEffect(() => {
     const a = localStorage.getItem("translatelanguages")
     setTranslatelanguages(a)
    }, [])
    return (
        <Translate.Provider value={{ translatelanguages, setTranslatelanguages, }}>
            {children}
        </Translate.Provider>
    )
}

export default Translater