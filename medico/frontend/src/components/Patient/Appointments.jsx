import React, { useState, useEffect } from 'react';
import moment from 'moment'; // for date and time manipulation
import axios from 'axios';
import { Table, Button } from 'antd';
import Header from './Header';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Appointments = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetchData();
  }, []);

  const storeId = (value, value2) => {
    console.log("doc id stored is", value);
    localStorage.setItem("detailToDisplayOnVideoCall", JSON.stringify(value2))
    localStorage.setItem("consulId", value);
  }

  const fetchData = async () => {
    try {
      const patId = parseInt(localStorage.getItem('patId'));
      const response = await axios.get(`http://localhost:8081/api/patient/getAllConsultationsOfPat/${patId}`);
      const data = response.data;

      setConsultations(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTimeRemaining = (date, time) => {
    const consultationDateTime = moment(`${date} ${time}`);
    const now = moment();
    const duration = moment.duration(consultationDateTime.diff(now));

    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  const columns = [
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
      render: doctor => <strong>{doctor.docName}</strong>,
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
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        moment().isBefore(moment(`${record.date} ${record.time}`)) ? (
          <div>
            You can join in: <span className='font-semibold'>{calculateTimeRemaining(record.date, record.time)}</span> 
          </div>
        ) : moment().isBefore(moment(`${record.date} ${record.time}`).add(30, 'minutes')) ? (
          <Button className='bg-purple-700'>
            <Link onClick={() => storeId(consultations[0].doctor.docId, consultations[0])} to="/videoCallPatient"> Join Now </Link> 
          </Button>
        ) : null
      ),
    },
  ];

  return (
    <div className="flex h-full">
      <Navbar />
      <main className="flex-1 flex flex-col p-5">
        <Header />
        <div className="bg-white rounded-lg p-6 shadow-md border-solid border-t-5 border-blue-500">
          <h1 className="text-3xl font-bold mb-6">Upcoming Consultations</h1>
          <Table dataSource={consultations} columns={columns} pagination={false} />
        </div>
      </main>
    </div>
  );
};

export default Appointments;
