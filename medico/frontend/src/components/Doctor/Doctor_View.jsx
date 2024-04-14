import React from 'react'
import { NavbarDoc } from './NavbarDoc'
import HeaderDoc from './HeaderDoc'
import { useState,useEffect,useContext } from 'react'
import AuthContext from '../../../Context/AuthContext'
import { useRef } from 'react'
import { Table } from 'antd'
import axios from 'axios'
import Chart from 'chart.js/auto';
import './style.css'
import BarChart from '../Patient/BarChart'
const Doctor_View = () => {

    const [consultations, setConsultations] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const profile = JSON.parse(localStorage.getItem("userProfile"));
        const id = profile.id
        try {
          const response = await axios.get(`http://localhost:8081/api/doctor/getPendingConsultationsOfDoc/${id}`);
          console.log(response.data);
          setConsultations(response.data);
        } catch (error) {
          console.error('Error fetching consultations:', error);
        }
      };
  
      fetchData();
    }, []);
    const dataSource = consultations.map((consultation, index) => ({
        key: index.toString(),
      
        patientName: consultation.patient.patName,
        
        date: consultation.date,
        time: consultation.time,
      }));
    
      const columns = [
      
        {
          title: 'Patient Name',
          dataIndex: 'patientName',
          key: 'patientName',
        },
        
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Time',
          dataIndex: 'time',
          key: 'time',
        },
      ];
     
      const {getDocConsultation} = useContext(AuthContext)
    const {docConsultation} = useContext(AuthContext)
    const [monthlyData, setMonthlyData] = useState({});
    const chartRef = useRef(null);
    useEffect(() => {
        getDocConsultation();
    }, []);

    useEffect(() => {
        // Calculate number of consultations per month
        const data = {};
        docConsultation.forEach(consultation => {
          const date = new Date(consultation.date);
          const month = date.toLocaleString('default', { month: 'long' });
          if (!data[month]) {
            data[month] = 0;
          }
          data[month]++;
        });
    
        setMonthlyData(data);
      }, [docConsultation]);

      useEffect(() => {
        // Destroy previous chart instance
        if (chartRef.current !== null) {
          chartRef.current.destroy();
        }
    
        // Draw new chart using Chart.js
        const ctx = document.getElementById('consultationsBarGraph');
        if (ctx) {
          chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: Object.keys(monthlyData),
              datasets: [{
                label: 'Number of Consultations',
                data: Object.values(monthlyData),
                backgroundColor: '#7900dc',
                borderColor: '#7900dc',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      }, [monthlyData]);
    
  return (
  <>
  <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
  <NavbarDoc />
        <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] max-w-full text-left text-xs text-navy-100 font-nunito">
              <HeaderDoc />
             </div>
             <h1 className='ml-[400px] bg-slate-100 p-5 shadow-2xl ' style={{ border: '10px solid #8000FF' }}>Upcoming Appointments</h1>
             <Table className='custom-table shadow-md bg-mediumpurple-100 w-[700px] text-center ml-[200px] font-extrabold'
      dataSource={dataSource}
       columns={columns}
      bordered
      pagination={false}
      
      style={{ backgroundColor: '#8A2BE2' }} 
    />
    <div className='ml-[100px] '>
        <h1 className=' ml-[250px] bg-slate-100 p-5 shadow-2xl'  style={{ border: '10px solid #8000FF' }}>Past Appointment Stats</h1>
         <div style={{ width: '600px', height: '300px' }} className='mt-[50px] ' >
           <canvas  id="consultationsBarGraph"></canvas>
           </div>
           </div>
          </section>
        </main>
      </div>
  </>
  )
}

export default Doctor_View