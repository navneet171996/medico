import { Navigate } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
const PatientRoutes = ({children}) => {
    
   const {user} = useContext(AuthContext)    
    
    if(user && user.role=="PATIENT"){
         
            return children;
          
    }
    else{
        localStorage.clear();
        return <Navigate to="/login" />
    }
   
   
}

export default PatientRoutes