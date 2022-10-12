import { createContext ,useState } from "react";

export const MenuContext = createContext({
   isOpen:false,
   SetIsOpen:() => null,

})

export const MenuProvider  = ({children}) => {
    const [isOpen,SetIsOpen] = useState(null)
    const value = {isOpen,SetIsOpen}
    return <MenuContext.Provider value = {value}>{children}</MenuContext.Provider>
}