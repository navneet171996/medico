import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import { useContext } from 'react';

const Hospital_Detail = () => {
  const [hospitalDetails, setHospitalDetails] = useState({});
  const [numDoctors, setNumDoctors] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  const hospitalId = profile?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/admin/getDoctorsOfHospital/${hospitalId}`);
        if (response.data.length > 0) {
          setHospitalDetails(response.data[0].hospital);
          setNumDoctors(response.data.length); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (hospitalId) {
      fetchData();
    }
  }, [hospitalId]);

  return (
    <>
      <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
        <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="container mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8  text-center bg-gradient-to-r from-sky-500 to-indigo-500 ">
                  <div className="text-[40px] font-semibold mb-2">{hospitalDetails.hospitalName}</div>
                  <div className="text-white">{hospitalDetails.hospitalAddress}</div>
                  <div className="text-white float-end shadow-2xl">Doctors Registered - {numDoctors}</div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default Hospital_Detail;
