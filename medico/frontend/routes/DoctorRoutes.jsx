import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const DoctorRoutes = ({children}) => {
    const {user} = useContext(AuthContext)    
    
    if(user){
         
            return children;
          
    }
   
      return <Navigate to="/login"> </Navigate>
}

export default DoctorRoutes