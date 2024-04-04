import { Navigate } from "react-router-dom"
import AuthContext from "../Context/AuthContext"
import { useContext } from "react"

const AdminRoutes = ({children}) => {
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

export default AdminRoutes