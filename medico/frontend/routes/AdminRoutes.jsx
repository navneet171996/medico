import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"
import AuthContext from "../Context/AuthContext"
import { useContext } from "react"

const AdminRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
   if(user && user.role=="ADMIN"){
         
      return children;
    
   }
   else{
   localStorage.clear();
   return <Navigate to="/login" />
   }
}

export default AdminRoutes