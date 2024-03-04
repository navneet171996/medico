// import axios_instance from "../axios/axios_instance";
// import jwt_decode from 'jsonwebtoken'

const logOut = ()=> {
    localStorage.clear();
    
 }



const setToken = (token)=>{
    // localStorage.setItem('token',token)
}

const getToken=()=>{
    // const token = localStorage.getItem('token')
    // if(token){
    //     return token;
    // }
    return null;
}

const login = (userData)=>{
    // axios_instance.post("/login",userData)
}

const getUserEmail = () =>{
    // const token = getToken();
    // if(token){
        // const payLoad = jwt_decode(token)
        // console.log(payLoad?.email);
        return "lavishsainik@gmail.com"
    //}
    //return null;
}

const getUserRole = () =>{
    // const token = getToken();
    // if(token){
        // const payLoad = jwt_decode(token)
        // console.log(payLoad?.role);
        return "PATIENT"
    //}
    
}

const isLoggedIn =()=>{
    const token =getToken();
    // if(token){
        // const payLoad = jwt_decode(token)
        // const isLogin = Date.now() < payLoad.exp*1000;
        return true
   // }
}


export   const authService = {getToken,setToken,login,getUserEmail,getUserRole,logOut}
