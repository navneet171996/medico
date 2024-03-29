import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const DoctorRoutes = ({children}) => {
    const {user} = useContext(AuthContext)    
    
    if(user && user.role=="DOCTOR"){
         
            return children;
          
    }
    else{
        localStorage.clear();
        return <Navigate to="/login" />
    }
   

}

export default DoctorRoutes