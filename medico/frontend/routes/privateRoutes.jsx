
import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
export const PrivateRoute = ({children,accessBy}) => {
   console.log("entered in private route");
    const {user} = useContext(AuthContext)
    if(accessBy==="non-authenticated"){
          if(!user){
            return children;
          }
    }
    else if(accessBy==="authenticated"){
      console.log("logged in 1");
      if(user){
         console.log("logged in");
         return children;
      }
    }
   return <Navigate to="/"> </Navigate>
}