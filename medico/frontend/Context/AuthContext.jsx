import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext({})
import { useNavigate } from "react-router-dom";

export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate()

    const [specialization,setSpecialization] = useState([])
    const [hospitals,setHospitals] = useState([]);
    const [patientProfile,setPatientProfile] = useState([])
   const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      const decodedToken = jwtDecode(JSON.parse(userProfle).token);
      return decodedToken;
    }
    return null;
  });
   const loginApiCallAdmin = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    console.log(payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/loginAdmin",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    setUser(apiResponse.data);
    navigate('/admin')
  };

  const loginApiCallDoctor = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/loginDoctor",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    setUser(apiResponse.data);
    navigate('/doctor')
  };

  const registerAdmin = async(payload) =>{
    console.log(payload);
        let apiResponse = await axios.post("http://localhost:8081/api/auth/registerAdmin",payload);
        console.log(apiResponse);
  }
  

  const logoutAPICall = () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/loginPatient");
  };

  


  const getSpecialization = async () =>{
    console.log("I am called");
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}`};
    const specializationDetails =await  axios.get("http://localhost:8081/api/home/allSpecialities", {headers:headers})
    console.log(specializationDetails.data);
 
    if (Array.isArray(specializationDetails.data) && specializationDetails.data.length > 0) {
      setSpecialization(specializationDetails.data);
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
    setUser(apiResponse.data);
    navigate('/patient')
  };

  const getPatientDetails = async (payload) => {
     let apiResponse = await axios.get("http://localhost:8081/api/patient/getPatientDetails/1");
     setPatientProfile(apiResponse.data)
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



    
    

    return <AuthContext.Provider value={{patientProfile,hospitals,getAllHospitals,getPatientDetails,registerPatient,loginApiCallAdmin,loginApiCallDoctor,loginApiCallPatient,user,logoutAPICall,getSpecialization,specialization,registerAdmin}}>{children}</AuthContext.Provider>

   
}

export default AuthContext