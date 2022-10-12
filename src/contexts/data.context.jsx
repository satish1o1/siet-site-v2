import { createContext,useState,useEffect } from "react";
import { getMarks } from "../utils/firebase/firebase.utils";
export const DataContext = createContext({
    data:{},
    setData:()=>null
})

export const DataProvider = ({children})=>{
    const [data,setData] = useState({})
    useEffect(() => {
        const getCategoryMap = async () => {
           const categories = await getMarks()
           setData(categories)
        };
        getCategoryMap()
        
     },[])
    const value = {data,setData}
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}