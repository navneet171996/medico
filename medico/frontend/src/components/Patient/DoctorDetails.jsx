import React from 'react'
import AuthContext from '../../../Context/AuthContext'
import { useContext } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { Rate } from 'antd';
import BarChart from './BarChart'
import { useEffect } from 'react'

const DoctorDetails = (docId) => {
    const {docDetails} = useContext(AuthContext)
    // useEffect(() => {
       
    // }, []);
   
  return (
    <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
   <Navbar/>
   <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
      <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] max-w-full text-left text-xs text-navy-100 font-nunito">
    <Header/>
  </div>
  <div className='flex flex-row'>

    <div className='flex flex-col'>
    <div className='text-[40px]'>{docDetails.docName}</div>
    <img src="doctor2.jpg" className=' w-[300px] h-[200px] rounded-xl my-5' alt="" />
    </div>

    <div className='flex flex-col bg-whitesmoke-100 ml-[250px] mt-[50px] px-[40px] py-[40px]'>
        <div className='py-3'> <span className="text-mediumpurple-200 text-[20px]  ">Doctor's Email</span> : {docDetails.email}</div>
        <div className='py-3'> <span className="text-mediumpurple-200 text-[20px]  ">Speciality</span> :  {docDetails.speciality ? docDetails.speciality.specialityName : 'Unknown'}</div>
        <div className='py-3'> <span className="text-mediumpurple-200 text-[20px]  ">Hospital</span> :  {docDetails.hospitalName}</div>
        <div className='py-5 pl-[120px]'> <Rate disabled defaultValue={2} style={{ color: '#9370DB' }} /></div>
    </div>

  </div>
  <div className='flex flex-row'>
  <BarChart/>
  <div className='ml-[300px] mt-[50px] '>
   <div className="border-solid border-4 px-8 py-8 hover:bg-slate-200 cursor-pointer">Book an appointment with <br /> <span className=' text-mediumpurple-200 text-[25px]'>  {docDetails.docName} </span> </div> 
  </div>
  </div>
  </section>
  </main>
   </div>
    )
}

export default DoctorDetails