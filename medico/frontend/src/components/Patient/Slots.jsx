import React, { useEffect,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../../Context/AuthContext';
import { Card, Button } from 'antd';
const Slots = () => {
   const {appointment} = useContext(AuthContext)
  useEffect(() => {
    const id = localStorage.getItem('doctor')
    const date = localStorage.getItem('dateChoosed') 
       let payload = {
            docId:id,
            date:date
       }
       console.log(payload);
       appointment(payload)
       
}, []);

  const navigate = useNavigate()
  const slotChoice = localStorage.getItem('slotChoosen')
  console.log("choice of slot is" , slotChoice);
  const timeSlots = [];
  const totalSlots = JSON.parse(localStorage.getItem('totalSlots'));
  let startTime = 0, endTime = 0;
  if (slotChoice === 'morning') {
    startTime = 9;
    endTime = 12;
  } else if (slotChoice === 'noon') {
    startTime = 12;
    endTime = 15;
  } else if (slotChoice === 'evening') {
    startTime = 15;
    endTime = 21;
  }

  for (let i = startTime; i < endTime; i++) {
    for (let j = 0; j < 60; j += 30) {
      const time = `${i < 10 ? '0' : ''}${i}:${j === 0 ? '00' : j}`;
      timeSlots.push(time);
    }
  }

  const handleSlotSelection = (time) => {
    localStorage.setItem('timeChoosed',time);
    console.log(localStorage.getItem('timeChoosed'));
       navigate('/checkout')
  };
  
 

  return (
    <div className="slots-availability grid grid-cols-4  px-10 py-5 justify-center">
      
          {timeSlots.map((time, index) => (
            // <tr key={index}>
            //   <td>{time}</td>
            //   <td>{totalSlots[index] === true ? 'Available' : 'Not Available'}</td>
            // </tr>
            <Card
            className='bg-mediumpurple-200 font-extrabold mx-5 mt-5 text-center text-whitesmoke-300'
            title={time}
            style={{ width: 250 }}
            hoverable
            onClick={() => handleSlotSelection(time)}
          >
            {totalSlots[index] === true ? <p>Available</p> : <p className='text-slate-600'>Not Available</p>}
            {totalSlots[index] === true && (
      <Button type="primary"  className="font-extrabold">Select</Button>
    )}
          </Card>
          ))}
        
    </div>
  );
};

export default Slots;
