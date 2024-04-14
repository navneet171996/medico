import { Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const DoctorRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
   //  && user.role=="ADMIN"
    if(user ){
         
      return children;
    
   }
   else{
   localStorage.clear();
   return <Navigate to="/login" />
   }
   

}

export default DoctorRoutes