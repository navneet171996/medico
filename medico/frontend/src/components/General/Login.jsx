import React from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'
import { useRef,useState,useEffect,useContext} from 'react'
import { authService } from '../../../services/authService'
const Login = () => {
    
    
    const navigate = useNavigate()
    const location = useLocation()
   
    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');


   const handleSubmit=async (e)=>{
      e.preventDefault();
      console.log(user,pwd);
      const userData = { user, password}
    //   const response =  await authService.login(userData);
    //   console.log(response?.data);
      
    //   if(response?.data?.accessToken){
    //     authService.setToken(response?.data?.accessToken);
    //     navigate('/doctor');
    // }
    // authService.setToken('eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQURNSU4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJleHAiOjE3MDg0NDY1ODIsImlhdCI6MTcwODQ0NjU4MiwiZW1haWwiOiJKYXZhSW5Vc2UifQ.jN92cyKxuhE39u9xeit-yGRQQAAY5xm3lsIGyslsiM0');
      if(authService.getUserRole() === 'DOCTOR'){
        navigate('/doctor');}
        else if(authService.getUserRole() === 'PATIENT'){
            navigate('/patient')
        }
        else if(authService.getUserRole() === 'ADMIN'){
            navigate('/admin')
        }
        else{
            navigate('/login')
        }
   }

  return (

    <>        
        <section>
          
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                   
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Log In </button>
            </form>
           
        </section>

           
     </>
   
  )
}

export default Login