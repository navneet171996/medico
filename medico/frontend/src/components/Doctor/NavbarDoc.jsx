import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarDoc = () => {
  return (
    <>
      <div className=" h-[1186px] flex flex-col items-center justify-center py-0 pr-0  box-border mq1025:hidden">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-12 w-[82px] absolute my-0 mx-[!important] top-[234px] left-[-4px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_rgba(236,_13,_255,_0.2)_60%,_rgba(255,_255,_255,_0))] w-full h-full z-[1]" />
            <img
              className="absolute top-[12px] left-[43px] w-6 h-6 overflow-hidden z-[2]"
              loading="eager"
              alt=""
              src="/person.svg"
            />
          </div>
          <nav className=" m-0 self-stretch bg-mediumpurple-200 flex flex-col items-center justify-start py-[193px] pr-[92px] pl-[37px] gap-[33px_0px] text-left text-base text-gray-1100 font-nunito mq750:pt-[125px] mq750:pb-[125px] mq750:box-border">
      <div className="w-[218px] h-screen relative bg-mediumpurple-200 hidden" />

      <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
        <div className="flex flex-row items-start justify-start gap-[0px_13px]">
          <img
            className="h-[17px] w-5 relative z-[1]"
            loading="eager"
            alt=""
            src="/home.svg"
          />
          <Link to="/doctor_home" className="relative font-semibold z-[1] no-underline text-black">Home</Link>
        </div>
      </div>

      

      <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[37px] text-text">
        <Link to="/doctor" className="relative font-semibold z-[1] no-underline text-black">Profile</Link>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[37px] text-text">
        <Link to="/video_call_doc" className="relative font-semibold z-[1] no-underline text-black">Call</Link>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_13px]">
        <img
          className="h-6 w-6 relative object-cover min-h-[24px] z-[1]"
          loading="eager"
          alt=""
          src="/iconlybolddocument@2x.png"
        />
        <Link to="/doctor_history" className="relative font-semibold z-[1] no-underline text-black">History</Link>
        
      </div>
      
    </nav>
        </div>
      </div>
    </>
  )
}
export default NavbarDoc