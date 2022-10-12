import { createContext ,useState } from "react";

export const UserContext = createContext({
   CurrentUser:null,
   SetCurrentUser:() => null
})

export const UserProvider  = ({children}) => {
    const [CurrentUser,SetCurrentUser] = useState(null)
    const value = {CurrentUser,SetCurrentUser}
    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
}