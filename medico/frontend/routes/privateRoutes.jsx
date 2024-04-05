
import { useNavigate,useLocation } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { redirect } from "react-router-dom";


const PrivateRoute = ({children,accessBy}) => {

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

    const {user} = useContext(AuthContext)

    if(user){
    console.log("nothing called",user.role);}
    
    if(accessBy==="non-authenticated" && user==null){
          if(!user){
            console.log("non-auth called" , user);
            return children;
          }
          else{
            console.log("else portion");
            <Navigate to="/login" />
            return null;
          }
          
    }
    else if(accessBy==="authenticated"){
     
      if(user){
        console.log("auth called" , user.role);
         return children;
      }
      else{
        return <Navigate to="/loginPatient" />;
      }
      
    }
    else{
     if(user.role=="ADMIN"){
         return  <Navigate to="/admin" />
     }
     else if(user.role == "PATIENT"){
        return <Navigate to="/patient" />
     }
     else if(user.role == "DOCTOR"){
      return <Navigate to="/doctor" />
   }
   else{
    return <Navigate to="/loginPatient" />
   }
    }
   
}
export default PrivateRoute