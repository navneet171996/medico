import { Navigate } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { jwtDecode } from "jwt-decode";
const PatientRoutes = ({children}) => {
    
   const {user} = useContext(AuthContext)    
//    && user.role=="PATIENT"
let token = localStorage.getItem("token")
let userProfle = localStorage.getItem("userProfile");
const decodedToken = jwtDecode(JSON.parse(userProfle).token);
console.log(decodedToken);
if (user || token) {
    // Check if decoded token is null or if it doesn't have a role property
    if (!decodedToken || !decodedToken.role) {
        // If decodedToken is null or if it doesn't have a role property, redirect to login
        localStorage.clear();
        return <Navigate to="/login" />;
    }

    // Check if role is "PATIENT"
    if (decodedToken.role !== "PATIENT") {
        // If role is not "PATIENT", clear local storage and redirect to login
        localStorage.clear();
        return <Navigate to="/login" />;
    }

    // If decodedToken exists, has a role property, and role is "PATIENT", allow access to children
    return children;
}
    else{
        localStorage.clear();
        return <Navigate to="/login" />
    }
   
   
}

export default PatientRoutes