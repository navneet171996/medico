import { createContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext({})
import { useNavigate } from "react-router-dom";

export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate()
<<<<<<< Updated upstream
    const [specialization,setSpecialization] = useState()
=======
    const [specialization,setSpecialization] = useState(null)
>>>>>>> Stashed changes
   const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });
   const loginApiCall = async (payload) => {
    // await axios.post("http://localhost:8081/api/auth/login", payload);
    let apiResponse = await axios.post("http://localhost:8081/api/auth/login",payload);
    console.log("Api response "+apiResponse);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    localStorage.setItem('token', (apiResponse.data.token))
    console.log("The token is "+localStorage.getItem('token'));
    setUser(apiResponse.data);
    console.log("user check"+user);
    navigate('/patient')
  };

  const logoutAPICall = async () => {
<<<<<<< Updated upstream
    // await axios.get("http://localhost:4000/logout");
    // localStorage.removeItem("userProfile");
    // setUser(null);
    // navigate("/login");
  };

  const getSpecialization = async () =>{
    console.log("I am called");
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}`};
    const specializationDetails =await  axios.get("http://localhost:8081/api/home/allSpecialities", {headers:headers})
    setSpecialization(specializationDetails.data)
    console.log(specialization[0]);
  } 
    

=======
    await axios.get("http://localhost:4000/logout");
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/login");
  };

  const getSpecialization = async () =>{
      let specializationDetails = await axios.get("");
      setSpecialization(jwtDecode(specializationDetails))
  }
>>>>>>> Stashed changes


    
    
<<<<<<< Updated upstream
    return <AuthContext.Provider value={{loginApiCall,user,logoutAPICall,getSpecialization,specialization}}>{children}</AuthContext.Provider>
=======
    return <AuthContext.Provider value={{loginApiCall,user,logoutAPICall,specialization}}>{children}</AuthContext.Provider>
>>>>>>> Stashed changes
}

export default AuthContext