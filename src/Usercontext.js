import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState({username : ""})
    return <UserContext.Provider value={{username,setUsername }}>{children}</UserContext.Provider>
}
