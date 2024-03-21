import React from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'
import { useRef,useState,useEffect,useContext} from 'react'
import { authService } from '../../../services/authService'
import AuthContext from '../../../Context/AuthContext'

const Login = () => {
 
    
    const navigate = useNavigate()
    const location = useLocation()
    const {loginApiCall} = useContext(AuthContext)

    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    

   const handleSubmit=async (e)=>{
      e.preventDefault();
      console.log(user,pwd);
     
    //   const response =  await authService.login(userData);
    //   console.log(response?.data);
      
    //   if(response?.data?.accessToken){
    //     authService.setToken(response?.data?.accessToken);
    //     navigate('/doctor');
    // }
    // authService.setToken('eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQURNSU4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJleHAiOjE3MDg0NDY1ODIsImlhdCI6MTcwODQ0NjU4MiwiZW1haWwiOiJKYXZhSW5Vc2UifQ.jN92cyKxuhE39u9xeit-yGRQQAAY5xm3lsIGyslsiM0');
      
     let payload={
      adminEmail:user,
      adminPassword:pwd
     }
     
     await loginApiCall(payload)
    
   }

  return (

    <>        
        {/* <section>
          
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
           
        </section> */}

  <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-center justify-start pt-[67px] px-0 pb-36 box-border [row-gap:20px] tracking-[normal] mq1325:flex-wrap">
      <img
        className="h-[607.4px] w-[726px] relative max-w-full mq1325:flex-1"
        loading="eager"
        alt=""
        src="/vector.svg"
      />


     <form   className="m-0 w-[670px] rounded-6xl bg-gainsboro flex flex-col items-center justify-start pt-[5px] pb-[49px] pr-[63px] pl-[76px] box-border gap-[4px] min-w-[670px] max-w-full mq800:pl-[38px] mq800:pr-[31px] mq800:box-border mq800:min-w-full mq450:pb-[21px] mq450:box-border mq1125:pt-5 mq1125:pb-8 mq1125:box-border mq1325:flex-1">
      <div className="w-[670px] h-[813px] relative rounded-6xl bg-gainsboro hidden max-w-full" />
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[61px] gap-[1px_0px]">
        <div className="w-[237px] flex flex-row items-start justify-start py-0 pr-0 pl-[35px] box-border">
          <img
            className="h-[115px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="eager"
            alt=""
            src="/logo@2x.png"
          />
        </div>

        
        <div className="self-stretch rounded-11xl bg-mediumblue overflow-hidden flex flex-row items-start justify-between py-0 pr-[61px] pl-[81px] gap-[20px] z-[1] mq800:pl-10 mq800:pr-[30px] mq800:box-border mq450:flex-wrap">
          <div className="h-[74px] w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
            <div className="mt-[-8px] self-stretch h-[82px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <div className="h-[60px] w-[263px] absolute my-0 mx-[!important] top-[15px] right-[-119px] rounded-26xl bg-gray-100" />
                <div className="mb-[-26px] flex-1 relative text-5xl left-[20px] leading-[90px] font-semibold font-inter text-black text-left z-[1] mq450:text-lgi mq450:leading-[100px]">
                 <Link className='no-underline text-black'>Login</Link> 
                </div>
              </div>
            </div>
          </div>
          <div className="h-[74px] w-[131px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
            <div className="mt-[-8px] self-stretch h-[82px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
              <div className="mb-[-26px] self-stretch h-[108px] relative text-5xl leading-[125px] font-semibold font-inter text-black text-left flex items-end shrink-0 mq450:text-lgi mq450:leading-[100px]">
              <Link to="/register_patient" className='no-underline'> Register</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="self-stretch flex flex-col  items-center justify-center max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-[11px]">
          <div className="relative text-5xl leading-[100px] font-inter text-black text-left z-[1] mq450:text-lgi mq450:leading-[80px]">
            Mobile Number / Email Id
          </div>
        </div>
        <div className=" rounded-3xs bg-white box-border flex flex-row items-center justify-start py-0 px-[19px] max-w-full z-[1] mt-[-30px] border-[2px] border-solid border-neutral-colors-white">
          <div className="h-[95px] w-[531px] relative rounded-3xs bg-gray-500 box-border hidden max-w-full border-[2px] border-solid border-neutral-colors-white" />
          <input  type="text"
                    id="username"
                   
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required className="outline-none relative text-5xl  font-inter text-gray-300 text-left z-[2] mq450:text-lgi mq450:leading-[80px]"/>
        </div>
      </div>


      <div className="self-stretch h-[226px] relative max-w-full mq450:h-auto mq450:min-h-[226]">

      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-[11px]">
          <div className="relative text-5xl leading-[100px] font-inter text-black text-left z-[1] mq450:text-lgi mq450:leading-[80px]">
            Password
          </div>
        </div>
        <div className=" rounded-3xs bg-white box-border flex flex-row items-center justify-start py-0 px-[19px] max-w-full z-[1] mt-[-30px] border-[2px] border-solid border-neutral-colors-white">
          <div className="h-[95px] w-[531px] relative rounded-3xs bg-gray-500 box-border hidden max-w-full border-[2px] border-solid border-neutral-colors-white" />
          <input   type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                   
                    required className="outline-none relative text-5xl  font-inter text-gray-300 text-left z-[2] mq450:text-lgi mq450:leading-[80px]"/>
            
        </div>
      </div>


        <div className="absolute top-[178px] left-[200px] text-xl leading-[125%] font-inter text-black text-left z-[1] mq450:text-base mq450:leading-[20px]">
          Forgot password?
        </div>
      </div>


      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start max-w-full">
          <div className="h-[72px] w-[518px] relative rounded-6xl bg-mediumpurple-100 max-w-full z-[1]" />
          <button onClick={handleSubmit} className="relative text-17xl bg-transparent font-inter text-neutral-colors-white text-left z-[2] ml-[-321px]">
            Login
          </button>
        </div>
      </div>
    </form>
    </div>
       
           
     </>
   
  )
}

export default Login