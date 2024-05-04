import React from 'react'
import { useNavigationType,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigation } from 'react-router-dom'
import AuthContext from '../../../Context/AuthContext'
import { useContext } from 'react'
import Navbar_Admin from './Navbar_Admin'
import axios from 'axios'
import { useState } from 'react'
const Admin_Home = () => {
  const [hospitalDetails, setHospitalDetails] = useState({});
  const [numDoctors, setNumDoctors] = useState(0);

   const [doctors,setDoctors] = useState([])
   const {logoutAPICall} = useContext(AuthContext)    
  const logout=async (e)=>{
    e.preventDefault();
   logoutAPICall()
  
 }


 useEffect(() => {
  const fetchData = async () => {
   
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    const id = profile.id
    try {
      const response = await axios.get(`http://localhost:8081/api/admin/getDoctorsOfHospital/${id}`);
      console.log(response.data);
      setDoctors(response.data);
      if (response.data.length > 0) {
        setHospitalDetails(response.data[0].hospital);
        setNumDoctors(response.data.length); 
    }
    } catch (error) {
      console.error('Error fetching consultations:', error);
    }
  };

  fetchData();
}, []);



const handleRemoveDoctor = async (docId) => {
  const response = await axios.delete(`http://localhost:8081/api/admin/removeDoctorFromHospital/${docId}`);
  console.log(response.data);
};
  return (
   <>
        <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
        <Navbar_Admin />
        <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
          <div className="container mx-auto">
                    
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8  text-center bg-gradient-to-r from-sky-500 to-indigo-500 ">
                        <div className="text-[40px] font-semibold mb-2">{hospitalDetails.hospitalName}</div>
                        <div className="text-white">{hospitalDetails.hospitalAddress}</div>
                        <div className="text-white  float-end  shadow-2xl "> Docotrs Registered - {numDoctors}</div>
                    </div>


                    <div className="text-3xl font-bold mb-8 text-gray-800">Doctors</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {doctors.map(doctor => (
                            <div key={doctor.docId} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <div className="p-6">
                                    <div className="text-xl font-semibold mb-2 text-gray-800">{doctor.docName}</div>
                                    <div className="text-sm text-blue-600 font-extrabold mb-4">{doctor.speciality.specialityName}</div>
                                    <div className="flex justify-between items-center font-bold">
                                        <div className="text-gray-600">
                                            <div>Email: {doctor.email}</div>
                                            <div>Phone: {doctor.phoneNo}</div>
                                            <div>Gender: {doctor.gender}</div>
                                            <div>Date of Birth: {doctor.docDob}</div>
                                        </div>
                                        <button onClick={() => handleRemoveDoctor(doctor.docId)} className="text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-lg">
                                            Remove Doctor
                                        </button>
                                    </div>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>
         
          </section>
        </main>
      </div>
   </>
  )
}

export default Admin_Home