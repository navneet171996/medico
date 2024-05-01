import React, { useState, useEffect, useContext, useRef } from 'react';
import { NavbarDoc } from './NavbarDoc';
import HeaderDoc from './HeaderDoc';
import AuthContext from '../../../Context/AuthContext';
import { Table, Card, Space, Divider,Button } from 'antd';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './style.css';
import BarChart from '../Patient/BarChart';
import { Modal,Select } from 'antd';

const Doctor_View = () => {
    const { getDocConsultation, docConsultation } = useContext(AuthContext);
    const [monthlyData, setMonthlyData] = useState({});
    const chartRef = useRef(null);
    const [consultations, setConsultations] = useState([]);
    const [doctorDetails, setDoctorDetails] = useState({});
    const [hospitals, setHospitals] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState('');

    useEffect(() => {
      // Fetch doctor details
      const fetchDoctorDetails = async () => {
        const profile = JSON.parse(localStorage.getItem('userProfile'));
            const id = profile.id;
          try {
              const response = await axios.get(`http://localhost:8081/api/doctor/getDoctorDetails/${id}`);
              setDoctorDetails(response.data);
          } catch (error) {
              console.error('Error fetching doctor details:', error);
          }
      };

      // Fetch hospitals
      const fetchHospitals = async () => {
          try {
              const response = await axios.get('http://localhost:8081/api/patient/getAllHospitals');
              setHospitals(response.data);
          } catch (error) {
              console.error('Error fetching hospitals:', error);
          }
      };

      fetchDoctorDetails();
      fetchHospitals();
  }, []);

  const handleHospitalChange = (value) => {
      setSelectedHospital(value);
  };

  const handleJoinHospital = async() => {
    // Handle join hospital logic here
    const profile = JSON.parse(localStorage.getItem('userProfile'));
    const id = profile.id;
    console.log('Join Hospital:', selectedHospital);

    try {
        const response = await axios.get(`http://localhost:8081/api/doctor/applyToHospital/${id}/${selectedHospital}`);
        console.log(response.data);
        Modal.success({
            title: 'Request Sent!',
            content: 'Your request to join the hospital has been sent to the admin. Please wait for the approval. Thank you!!',
        });
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        Modal.error({
            title: 'Error',
            content: 'An error occurred while sending the request. Please try again later.',
        });
    }
};

  const handleResignHospital = () => {
      // Handle resign hospital logic here
      console.log('Resign from Hospital');
  };

    useEffect(() => {
        const fetchData = async () => {
            const profile = JSON.parse(localStorage.getItem('userProfile'));
            const id = profile.id;
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

    useEffect(() => {
        getDocConsultation();
    }, []);

    useEffect(() => {
        const data = {};
        docConsultation.forEach((consultation) => {
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
        if (chartRef.current !== null) {
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('consultationsBarGraph');
        if (ctx) {
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(monthlyData),
                    datasets: [
                        {
                            label: 'Number of Consultations',
                            data: Object.values(monthlyData),
                            backgroundColor: '#7900dc',
                            borderColor: '#7900dc',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }, [monthlyData]);

    return (
        <>
            <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start gap-0 tracking-normal">
                <NavbarDoc />
                <main className="flex-1 flex flex-col items-start justify-start pt-5 px-5 pb-0 box-border max-w-[calc(100% - 254px)]">
                    <section className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-xs text-navy-100 font-nunito">
                            <HeaderDoc />
                        </div>
                        <Card title="Join/Resign from Hospital" className="w-[90%]">
            {doctorDetails.hospitalName === null ? (
                <>
                    <div className="text-center">Select the Hospital you want to Join:</div>
                    <Select
                        className="w-full"
                        placeholder="Select Hospital"
                        onChange={handleHospitalChange}
                        value={selectedHospital}
                    >
                        {hospitals.map((hospital) => (
                            <Option key={hospital.id} value={hospital.hospitalId}>
                                {hospital.hospitalName}
                            </Option>
                        ))}
                    </Select>
                    <Button type="primary" className="mt-3" onClick={handleJoinHospital}>
                        Join Hospital
                    </Button>
                </>
            ) : (
                 <div>
                  <div className='text-center pb-[10px]'> Doctor in <span className='text-[20px] font-extrabold text-blue-600'> {doctorDetails.hospitalName} Hospital</span> </div>
                <Button type="primary" danger className='w-full h-[50px]' onClick={handleResignHospital}>
                    Resign from Hospital
                </Button>
                </div>
            )}
        </Card>
                        <Card title="Upcoming Appointments" className="ml-10 mb-5" style={{ width: '90%' }}>
                            <Table dataSource={dataSource} columns={columns} pagination={false} />
                        </Card>
                        <Card title="Past Appointment Stats" className="ml-10" style={{ width: '90%' }}>
                            <Divider orientation="left">Number of Consultations</Divider>
                            <div style={{ width: '100%', height: '400px' }}>
                                <canvas id="consultationsBarGraph"></canvas>
                            </div>
                        </Card>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Doctor_View;
