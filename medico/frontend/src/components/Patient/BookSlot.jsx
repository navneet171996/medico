import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../../Context/AuthContext';
import Header from './Header';
import Navbar from './Navbar';
import { Card, Button, Modal } from 'antd';
import { DatePicker, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const BookSlot = () => {
    const navigate = useNavigate();
    const { appointment } = useContext(AuthContext);
    const [dateString, setDateString] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (dateString) {
                localStorage.setItem('dateChoosed', dateString);
                const id = localStorage.getItem('doctor');
                const payload = {
                    docId: id,
                    date: dateString
                };
                await appointment(payload);
            }
        };

        fetchData();
    }, [dateString]);
    
    const onChange = (date, dateString) => {
        setDateString(dateString);
    };

    const handleSlotSelection = (slot) => {
        if (!dateString) {
            setShowModal(true);
        } else {
            localStorage.setItem('slotChoosen', slot);
            navigate('/bookAppointment');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex">
            <Navbar />
            <main className="flex-1 flex flex-col items-start justify-start p-5 max-w-[calc(100%_-_254px)]">
                <section className="flex flex-col items-start justify-start gap-6 w-full">
                    <Header />
                    <div className="text-center items-center justify-center ml-[500px]">
                        
                        <Space direction="vertical" size={12}>
                            <DatePicker className='text-center font-bold bg-slate-300 text-white ' onChange={onChange} needConfirm />
                        </Space>
                        
                    </div>
                    <div className="mt-8">
                        <h1 className='text-center relative left-[20%] mt-[50px]'>Choose the slot which suits you best!</h1>
                        <div className="flex justify-center gap-10 relative left-[20%] font-bold">
                            <Card
                                className='w-64 font-extrabold'
                                title="Morning Slot"
                                hoverable
                                onClick={() => handleSlotSelection('morning')}
                            >
                                <p className='font-bold'>Between 9:30 am to 11:30am</p>
                                <Button type="primary">Select</Button>
                            </Card>
                            <Card
                                className='w-64'
                                title="Noon Slot"
                                hoverable
                                onClick={() => handleSlotSelection('noon')}
                            >
                                <p className='font-bold'>Between 12:00pm to 3:00 pm</p>
                                <Button type="primary">Select</Button>
                            </Card>
                            <Card
                                className='w-64'
                                title="Evening Slot"
                                hoverable
                                onClick={() => handleSlotSelection('evening')}
                            >
                                <p className='font-bold'>Between 3:00pm to 8:30pm</p>
                                <Button type="primary">Select</Button>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                title="Please Select a Date First"
                visible={showModal}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="ok" type="primary" onClick={handleCloseModal}>
                        OK
                    </Button>
                ]}
            >
                <p>You must select a date before choosing an appointment slot.</p>
            </Modal>
        </div>
    );
}

export default BookSlot;
