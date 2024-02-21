import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"

const DoctorRoutes = ({children}) => {
    
   return (authService.getUserRole() === 'DOCTOR') ? children : <Navigate to="/login" />
}

export default DoctorRoutes