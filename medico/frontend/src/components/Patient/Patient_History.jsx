import React from 'react'

const Patient_History = () => {
  return (
    <>
     <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
      <div className="h-[1186px] flex flex-col items-center justify-center py-0 pr-0 pl-1 box-border mq1025:hidden">
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
          <nav className="m-0 self-stretch bg-mediumpurple-200 flex flex-col items-center justify-start py-[193px] pr-[92px] pl-[37px] gap-[33px_0px] text-left text-base text-gray-1100 font-nunito mq750:pt-[125px] mq750:pb-[125px] mq750:box-border">
      <div className="w-[218px] h-[1186px] relative bg-mediumpurple-200 hidden" />
      <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
        <div className="flex flex-row items-start justify-start gap-[0px_13px]">
          <img
            className="h-[17px] w-5 relative z-[1]"
            loading="eager"
            alt=""
            src="/home.svg"
          />
          <Link to="/patient_View" className="relative font-semibold z-[1] no-underline text-black">Home</Link>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[37px] text-text">
        <Link to="/patient" className="relative font-semibold z-[1] no-underline text-black">Profile</Link>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_13px]">
        <img
          className="h-6 w-6 relative object-cover min-h-[24px] z-[1]"
          loading="eager"
          alt=""
          src="/iconlybolddocument@2x.png"
        />
        <Link to="/patient_History" className="relative font-semibold z-[1] no-underline text-black">History</Link>
      </div>
    </nav>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Patient_History