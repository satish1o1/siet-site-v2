import SignInForm from "../../components/signin/sigin.component"
import { getMarks } from "../../utils/firebase/firebase.utils"
import { useContext,useEffect} from "react"
import { DataContext } from "../../contexts/data.context"
import './signin.styles.css'
const SignIn = () => {
    const {setData} = useContext(DataContext)
    useEffect(() => {
        const getCategoryMap = async () => {
           const categories = await getMarks()
           setData(categories)
        };
        getCategoryMap()
        
     },[])

    return(
        <div className="authentication-container">
            <SignInForm />
        </div>
    
    )
}

export default SignIn

