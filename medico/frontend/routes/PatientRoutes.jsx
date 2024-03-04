import { Navigate } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
const PatientRoutes = ({children}) => {
    
   const {user} = useContext(AuthContext)    
    
    if(user){
         
            return children;
          
    }
   
    return <Navigate to="/login"> </Navigate>
}

export default PatientRoutes