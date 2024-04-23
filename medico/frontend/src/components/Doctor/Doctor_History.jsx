import React from 'react'
import { Link } from 'react-router-dom'
import HeaderDoc from './HeaderDoc'
import NavbarDoc  from './NavbarDoc'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Rate,Input,Button } from 'antd';

const Doctor_History = () => {
    const { TextArea } = Input;
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [rating, setRating] = useState(0);
    useEffect(() => {
      const fetchOrders = async () => {
        const profile = JSON.parse(localStorage.getItem("userProfile"));
        const id = profile.id
        try {
          const response = await axios.get(`http://localhost:8081/api/doctor/getAllConsultationOfDoc/${id}`);
          setOrders(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
  
      fetchOrders();
    }, []);
  
    const openDetailsPopup = (order) => {
      setSelectedOrder(order);
    };
  
    const closeDetailsPopup = () => {
      setSelectedOrder(null);
    };
   
    
    return (
      <>
      <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
          <NavbarDoc />
          <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
            <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] max-w-full text-left text-xs text-navy-100 font-nunito">
              
              </div>
                <h1>Appointment Summary</h1>
                <div className="container  px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orders.map(order => (
            <div key={order.consultationId} onClick={() => openDetailsPopup(order)} className=" bg-mediumpurple-100 w-[1000px] shadow-2xl rounded-md p-6 hover:shadow-none  cursor-pointer">
              <h2 className="text-lg font-semibold mb-4 text-medium-purple-300">Order #{order.consultationId}</h2>
              <div className=" text-white flex flex-row">
                <div className='text-[20px]'>
                <p><span className="font-semibold">Patient:</span> {order.patient.patName}</p>
                <p><span className="font-semibold">Doctor:</span> {order.doctor.docName}</p>
                </div>
                <div className='ml-[500px] text-[20px]'>
                <p><span className="font-semibold">Date:</span> {order.date}</p>
                <p><span className="font-semibold">Time:</span> {order.time}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
        {selectedOrder && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-md">
            <button className="absolute top-8 right-8 text-gray-600" onClick={closeDetailsPopup}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-lg  mb-4 text-medium-purple-300">Order #{selectedOrder.consultationId}</h2>
              <div className=" text-black">
                <p><span className="font-extrabold">Patient:</span> {selectedOrder.patient.patName}</p>
                <p><span className="font-extrabold">Doctor:</span> {selectedOrder.doctor.docName}</p>
                <p><span className="font-extrabold">Date:</span> {selectedOrder.date}</p>
                <p><span className="font-extrabold">Time:</span> {selectedOrder.time}</p>
                <p><span className="font-extrabold">Amount Paid:</span> ₹ {selectedOrder.doctor.rate}</p>
                <p><span className="font-extrabold">Prescription:</span> <button className=' bg-mediumpurple-100 text-white font-bold rounded cursor-pointer'>Download</button></p>
                 
              
              </div>
            </div>
          </div>
        )}
      </div>
            </section>
          </main>
        </div>
      </>
    )
}

export default Doctor_History