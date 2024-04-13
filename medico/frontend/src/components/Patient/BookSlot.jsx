import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../../Context/AuthContext';
import Slots from './Slots'; // Assuming Slots component handles displaying slots
import Header from './Header';
import Navbar from './Navbar';
import { Card, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const BookSlot = () => {
    const navigate = useNavigate()
    const { slots, appointment, docId } = useContext(AuthContext);
    const [ dateString, setDateString ] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [fetchedSlots,setFetchedSlots] = useState()
    const [selectedSlot, setSelectedSlot] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          console.log(dateString);
          let id = localStorage.getItem('doctor')
          if (dateString) {   
            localStorage.setItem('dateChoosed',dateString)
            let payload = {
                 docId:id,
                 date:dateString
            }
            await appointment(payload)
            const totalSlots = JSON.parse(localStorage.getItem('totalSlots'));
          }
        };
    
        fetchData();
      }, [dateString]); // Make useEffect dependent on docId, dateString, and fetchSlots
    
      const onChange = (date, dateString) => {
        setDateString(dateString);
      };
      const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
        localStorage.setItem('slotChoosen',slot)
        navigate('/bookAppointment')
      };
  return (
   <>
    <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
        <Navbar />
        <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] max-w-full text-left text-xs text-navy-100 font-nunito">
              <Header />
            </div>
            <div className='mt-[20px] ml-[500px] align-middle'>
                <h1 className='relative right-[15px]'>Select the date</h1>
              <Space direction="vertical" size={12}>
                <DatePicker onChange={onChange} needConfirm />
              </Space>
            </div>
            <div className="slots-availability mt-[50px]">
                 <h1 className=' ml-[400px] '>Choose the slot which suits you best!</h1>
                 <div className='ml-[100px]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
      className='bg-mediumpurple-200 font-extrabold '
        title="Morning Slot"
        style={{ width: 300, margin: '0 10px', backgroundColor:'bg-mediumpurple-200' }}
        hoverable
        onClick={() => handleSlotSelection('morning')}
      >
        <p>Between 9:30 am to 11:30am</p>
        <Button type="primary font-extrabold">Select</Button>
      </Card>
      <Card
        className='bg-mediumpurple-200 font-extrabold'
        title="Noon Slot"
        style={{ width: 300, margin: '0 10px' }}
        hoverable
        onClick={() => handleSlotSelection('noon')}
      >
        <p>Between 12:00pm to 3:00 pm</p>
        <Button type="primary font-extrabold">Select</Button>
      </Card>
      <Card
      className='bg-mediumpurple-200 font-extrabold'
        title="Evening Slot"
        style={{ width: 300, margin: '0 10px' }}
        hoverable
        onClick={() => handleSlotSelection('evening')}
      >
        <p>Between 3:00pm to 8:30pm</p>
        <Button type="primary font-extrabold">Select</Button>
      </Card>
    </div>

            </div>
          </section>
        </main>
      </div>
   </>
  )
}

export default BookSlot