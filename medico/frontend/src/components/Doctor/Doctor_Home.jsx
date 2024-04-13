import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Doctor = () => {
    console.log("Welcome");
    const [email, setEmail] = useState();
    const [userRole, setUserRole] = useState();
    const navigate  = useNavigate();


    useEffect(()=> { 
        const role =  authService.getUserRole();
            setUserRole(role);
       
        const email =  authService.getUserEmail();
            setEmail(email);

    },[]);

    const logout = ()=> {
        authService.logOut();
        navigate('/login');
    }

    return (
         <>

         <div >
            <div>
                <div>
                    {/* <h1> {email} </h1> */}

                <ul >
                <li >Email : {email}</li>
                <li >Role : {userRole}</li>
              
                </ul>
                <div >
                {(userRole === 'ADMIN') && 
                <button onClick={()=> navigate('/doctor')}>
                ADMIN PANEL
            </button>
                }
                    <div className="mt-5 text-center">
                    <button className="btn btn-danger" onClick={()=> logout()}>
                        logout
                    </button>

                    </div>
                 

                </div>
                </div>
            </div>



         </div>
         
         </>
      );
}
 
export default Doctor;