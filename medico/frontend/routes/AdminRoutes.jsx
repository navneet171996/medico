import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"

const AdminRoutes = ({children}) => {
    
   return (authService.getUserRole() === 'ADMIN') ? children : <Navigate to="/login" />
}

export default AdminRoutes