import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext({})
import { useNavigate } from "react-router-dom";

export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate()

    const [specialization,setSpecialization] = useState([])
   
   const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });
   const loginApiCallAdmin = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/login",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    setUser(apiResponse.data);
    navigate('/admin')
  };
  const loginApiCallPatient = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/login",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    setUser(apiResponse.data);
    navigate('/patient')
  };
  const loginApiCallDoctor = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/login",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    setUser(apiResponse.data);
    navigate('/doctor')
  };

  const registerAdmin = async(payload) =>{
    console.log(payload);
        let apiResponse = await axios.post("http://localhost:8081/api/auth/register",payload);
        console.log(apiResponse);
  }

  const logoutAPICall = async () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/login");
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
    // console.log(specialization[0]);
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



    
    

    return <AuthContext.Provider value={{loginApiCallAdmin,loginApiCallDoctor,loginApiCallPatient,user,logoutAPICall,getSpecialization,specialization,registerAdmin}}>{children}</AuthContext.Provider>

   
}

export default AuthContext