import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
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
<<<<<<< HEAD
import Register_patient from './components/General/Register_patient'
import Regiester_doctor from './components/General/Regiester_doctor'
import Register_admin from './components/General/Register_admin'
=======
import Register from './components/General/Register'
import Patient_History from './components/Patient/Patient_History'

>>>>>>> f0a2556edfde4a7ef142d3035d411d8cbbae2694

function App() {
 

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout/>}  >

          {/* public routes */}
          <Route path="/" element={<Landing/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/register_patient" element={<Register_patient/>}  />
          <Route path="/register_doctor" element={<Regiester_doctor/>}  />
          <Route path="/register_admin" element={<Register_admin/>}  />
          
          {/* protected Routes */}
            
          <Route path='/admin' element={  <AdminRoutes>  <Admin_Home />  </AdminRoutes> }> </Route>
          <Route path='/patient' element={  <PatientRoutes>  <Patient_Home />  </PatientRoutes> }> </Route>
          <Route path='/patient_History' element={  <PatientRoutes>  <Patient_History />  </PatientRoutes> }> </Route>
          <Route path='/doctor' element={  <DoctorRoutes>  <Doctor_Home />  </DoctorRoutes> }> </Route>
          

          {/* 404 page  */}
          <Route path="*" element={<Missing/>} />

        </Route>
    </Routes>
    </>
  )
}

export default App
