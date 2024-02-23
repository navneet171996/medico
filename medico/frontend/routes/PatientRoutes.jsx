import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"

const PatientRoutes = ({children}) => {
    
   return (authService.getUserRole() === 'PATIENT') ? children : <Navigate to="/login" />
}

export default PatientRoutes