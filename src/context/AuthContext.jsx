import { createContext, useState } from "react";


export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")

    function getToken(Token) {
        setToken(Token)
        console.log(token)

    }

    function getName(token) {
        setName(token)
        console.log(name)

    }

    function getId(id) {
        setId(id)
    }

    return (
        <AuthContext.Provider
            value={{getToken, getName, getId, name, token, id}}
        >
            {children}
        </AuthContext.Provider>
    )
}