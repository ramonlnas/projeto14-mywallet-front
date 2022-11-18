import { createContext, useState } from "react";


export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    
    const [token, setToken] = useState("")
    const [name, setName] = useState("")

    function getToken(Token) {
        setToken(Token)
        console.log(token)

    }

    function getName(token) {
        setName(token)
        console.log(name)

    }

    return (
        <AuthContext.Provider
            value={{getToken, getName, name, token}}
        >
            {children}
        </AuthContext.Provider>
    )
}