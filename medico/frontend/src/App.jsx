import { useContext, useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Layout from './Layout'
import Landing from './components/General/Landing'
import Login from './components/General/Login'
import Missing from './Missing'
import Admin_Home from './components/Admin/Admin_Home'
import Patient_Home from './components/Patient/Patient_Home'
import Doctor_Home from './components/Doctor/Doctor_Home'
import DoctorRoutes from '../routes/DoctorRoutes'
import AdminRoutes from '../routes/AdminRoutes'
import PatientRoutes from '../routes/PatientRoutes'
import Register_patient from './components/General/Register_patient'
import Regiester_doctor from './components/General/Regiester_doctor'
import Register_admin from './components/General/Register_admin'
import Patient_History from './components/Patient/Patient_History'
import AuthContext, { AuthContextProvider } from '../Context/AuthContext'
import Session_Out from './components/Session_out/Session_Out'
import { PrivateRoute } from '../routes/PrivateRoutes'

function App() {
    const {user} = useContext(AuthContext) 

  return (
    <>
     <AuthContextProvider>
    <Routes>
        <Route path="/" element={<Layout/>}  >

          {/* public routes */}
          <Route path="/"   element={<Landing/>}  />
          <Route path="/login"  element={<Login/>}  />
          <Route path="/register_patient"  element={<Register_patient/>}  />
          <Route path="/register_doctor"  element={<Regiester_doctor/>}  />
          <Route path="/register_admin"  element={<Register_admin/>}  />
          
          {/* protected Routes */}
           <Route path='/admin'  element={ <PrivateRoute  accessBy="authenticated"> <AdminRoutes>  <Admin_Home />  </AdminRoutes> </PrivateRoute> }> </Route>
           <Route path='/patient'  element={ <PrivateRoute  accessBy="authenticated"> <PatientRoutes>  <Patient_Home />  </PatientRoutes> </PrivateRoute> }> </Route>
            <Route path='/patient_History'   element={ <PrivateRoute  accessBy="authenticated">  <PatientRoutes>  <Patient_History />  </PatientRoutes> </PrivateRoute>}> </Route>
              <Route path='/doctor'   element={ <PrivateRoute  accessBy="authenticated"> <DoctorRoutes>  <Doctor_Home />  </DoctorRoutes></PrivateRoute> }> </Route>
          
         


          {/* 404 page  */}
          <Route path="*"   element={<Missing/>} />

        </Route>
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
