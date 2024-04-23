import { createContext, useState,useEffect, useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext({})
import { useNavigate } from "react-router-dom";
import { notification,message } from 'antd';

export const AuthContextProvider = ({children}) =>{

  

    const navigate = useNavigate()
    const [specialization,setSpecialization] = useState([])
    const [hospitals,setHospitals] = useState([]);
    const [patientProfile,setPatientProfile] = useState([])
    const [specializationId,setSpecializationId] =useState(0)
    const [doctorList1,setDoctorList1] = useState([])
    const [docDetails,setDocDetails] = useState([])
    const [consultation,setConsultation] = useState([])
    const [docId,setDocId] = useState(0)
    const [slots,setSlots]=useState()
    const [spec,setSpec] = useState([])
    const [docProfile,setDocProfile] = useState([])
    const [docConsultation,setDocConsultation]=useState([])
    const [success,setSuccess] = useState(false)
   const [user, setUser] = useState()
   const [loading, setLoading] = useState(false);

   
  const loginApiCallDoctor = async (payload) => {
    setLoading(true);
        try {
            let apiResponse = await axios.post("http://localhost:8081/api/auth/loginDoctor",payload);
    
            console.log("Api response "+apiResponse);
            localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
            localStorage.setItem('token', (apiResponse.data.token))
            console.log("The token is test "+localStorage.getItem('token'));
        
            let userProfle = localStorage.getItem("userProfile");
            if (userProfle) {
              setSuccess(true)
              const decodedToken = jwtDecode(JSON.parse(userProfle).token);
              console.log("here",decodedToken);
              setUser(decodedToken);
              navigate('/doctor')
            }
        } catch (error) {
            console.error("Login failed:", error);
            message.error("Login failed. Please check your credentials.");
        }
        setLoading(false);
    
   };
 
   const loginApiCallAdmin = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    console.log(payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/loginAdmin",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is test "+localStorage.getItem('token'));
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      const decodedToken = jwtDecode(JSON.parse(userProfle).token);
      console.log("here",decodedToken);
      setUser(decodedToken);
      navigate('/admin')
    }
   
  };

 
  const registerAdmin = async(payload) =>{
    console.log(payload);
        let apiResponse = await axios.post("http://localhost:8081/api/auth/registerAdmin",payload);
        console.log(apiResponse);
  }
  

  const logoutAPICall = () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    localStorage.clear()
    setSuccess(false)
    navigate("/loginPatient");
  };

  


  const getSpecialization = async () =>{

    // const token = localStorage.getItem('token')
    // const headers = { Authorization: `Bearer ${token}`};
    //, {headers:headers}
    const specializationDetails =await  axios.get("http://localhost:8081/api/home/allSpecialities")
    console.log(specializationDetails.data);
 
    if (Array.isArray(specializationDetails.data) && specializationDetails.data.length > 0) {
      if(specializationDetails!==null){
      setSpecialization(specializationDetails.data);}
  } else {
      console.error("Invalid data format or empty array received");
  }
    console.log(specialization);
  }
  
  //hospitals
  const getAllHospitals = async()=>{
     let apiResponse = await axios.get("http://localhost:8081/api/patient/getAllHospitals");
    console.log("Get all hospitals");
     console.log(apiResponse);
     setHospitals(apiResponse.data)
  }
  
 //Patient Api calls
  const registerPatient = async(payload) =>{
    console.log(payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/registerPatient",payload);
    console.log(apiResponse);
    if(apiResponse){
      alert("registered successfully");
    }
  }

  const loginApiCallPatient = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/loginPatient",payload);
    console.log(apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      const decodedToken = jwtDecode(JSON.parse(userProfle).token);
      console.log("here",decodedToken);
      setUser(decodedToken);
      navigate('/patient')
    }
    
  };


  const getPatientDetails = async (payload) => {
     let apiResponse = await axios.get("http://localhost:8081/api/patient/getPatientDetails/1");
     setPatientProfile(apiResponse.data)
     localStorage.setItem('patId',apiResponse.data.patientId)
  }

  const getSepecificSpecialization = ()=>{
    console.log(specialization);
    for (let speciality of specialization) {
      if (speciality['specialityId'] === specializationId) {
          setSpec(speciality)
          console.log("spec is " + JSON.stringify(speciality))
      }}
  }

  const doctorBySpecialization = async() =>{
    console.log("main spec id", specializationId);
    //sid saved in localstorage in card.jsx
       let apiResponse = await axios.get(`http://localhost:8081/api/patient/docBySpeciality/sortedR/${localStorage.getItem('sId')}`);
       setDoctorList1(apiResponse.data)
       console.log(apiResponse.data);
  }
  
  const sortDoctorByPrice = async()=>{
      let apiResponse = await axios.get(`http://localhost:8081/api/patient/docBySpeciality/sortedP/${localStorage.getItem('sId')}`);
      setDoctorList1(apiResponse.data)
      
  }

  const getDoctorDetails = async()=>{
       //doctorId set in localStrogre in doctorCard
       let doctordet = localStorage.getItem('doctor')
       let apiResponse = await axios.get(`http://localhost:8081/api/doctor/getDoctorDetails/${doctordet}`);
       console.log("Doctor id is ",docId);
       setDocDetails(apiResponse.data)
       localStorage.setItem('docDetails', JSON.stringify(apiResponse.data)); 
       console.log(apiResponse);
  }

  const getConsultation = async()=>{
    let apiResponse = await axios.get(`http://localhost:8081/api/doctor/getAllConsultationOfDoc/${localStorage.getItem('doctor')}`);
    setConsultation(apiResponse.data)
    
     
  }

  const appointment = async(payload)=>{
      let apiResponse = await axios.post("http://localhost:8081/api/patient/getDoctorSlots",payload);
      setSlots(apiResponse.data)
      localStorage.setItem('totalSlots', JSON.stringify(apiResponse.data));
  }


  //   await axios.get("http://localhost:4000/logout");
  //   localStorage.removeItem("userProfile");
  //   setUser(null);
  //   navigate("/login");
  // };

  // const getSpecialization = async () =>{
  //     let specializationDetails = await axios.get("");
  //     setSpecialization(jwtDecode(specializationDetails))
  //}

  //Doctor pages endpoint calls
  const getDoctorProfile= async()=>{
       const profile = JSON.parse(localStorage.getItem("userProfile"));
       const id = profile.id
       let apiResponse = await axios.get(`http://localhost:8081/api/doctor/getDoctorDetails/${id}`)
       setDocProfile(apiResponse.data)
  }

  const getDocConsultation=async()=>{
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    const id = profile.id
    let apiResponse = await axios.get(`http://localhost:8081/api/doctor/getAllConsultationOfDoc/${id}`);
    setDocConsultation(apiResponse.data)
  }


    
    

    return <AuthContext.Provider value={{success, getDocConsultation,docConsultation,docProfile,getDoctorProfile,docId,slots,appointment,consultation,getConsultation,docDetails,getDoctorDetails,sortDoctorByPrice,doctorBySpecialization,doctorList1,spec,getSepecificSpecialization,specializationId,setSpecializationId,patientProfile,hospitals,getAllHospitals,getPatientDetails,registerPatient,loginApiCallAdmin,loginApiCallDoctor,loginApiCallPatient,user,logoutAPICall,getSpecialization,specialization,registerAdmin}}>{children}</AuthContext.Provider>

   
}

export default AuthContext