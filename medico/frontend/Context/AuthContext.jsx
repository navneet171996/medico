import { createContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext({})
import { useNavigate } from "react-router-dom";
export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate()
   const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });
   const loginApiCall = async (payload) => {
    await axios.post("http://localhost:4000/auth/login", payload, {
      withCredentials: true,
    });
    let apiResponse = await axios.get("http://localhost:4000/user-profile", {
      withCredentials: true,
    });
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    setUser(apiResponse.data);
    console.log("user check"+user);
    navigate('/admin')
  };

  const logoutAPICall = async () => {
    await axios.get("http://localhost:4000/logout", { withCredentials: true });
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/login");
  };


    
    
    return <AuthContext.Provider value={{loginApiCall,user,logoutAPICall}}>{children}</AuthContext.Provider>
}

export default AuthContext