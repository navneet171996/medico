import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rate, Button, Modal } from 'antd';
import Navbar from './Navbar';

const Doctor_History = () => {
  const { TextArea } = Input;
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [review, setReview] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const profile = JSON.parse(localStorage.getItem("userProfile"));
      const id = profile.id
      try {
        const response = await axios.get(`http://localhost:8081/api/doctor/getAllConsultationOfDoc/${id}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const openDetailsPopup = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const closeDetailsPopup = () => {
    setSelectedOrder(null);
    setModalVisible(false);
  };

  const handleRateChange = (value) => {
    setRating(value);
    setIsRated(false);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    setIsRated(false);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/patient/setRating', {
        consultationId: selectedOrder.consultationId,
        rating: rating,
        review: review,
      });
      setIsRated(true);
    } catch (error) {
      console.error('Error submitting rating and review:', error);
    }
  };

  return (
    <>
      <div className="flex gap-4 bg-gray-100 min-h-screen">
        <Navbar />
        <main className="flex-1 p-5">
          <h1 className="text-3xl font-semibold mb-8 text-center">Appointment History</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order) => (
              <div
                key={order.consultationId}
                onClick={() => openDetailsPopup(order)}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative"
              >
                <div className="bg-gradient-to-b from-blue-400 to-blue-500 px-6 py-4 text-white ">
                  <h2 className="text-lg font-extrabold text-white ">Order #{order.consultationId}</h2>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Completed</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-bold"><span className="font-extrabold">Patient:</span> {order.patient.patName}</p>
                  <p className="text-gray-600 font-bold"><span className="font-extrabold">Doctor:</span> {order.doctor.docName}</p>
                  <p className="text-gray-600 font-bold"><span className="font-extrabold">Date:</span> {order.date}</p>
                  <p className="text-gray-600 font-bold"><span className="font-extrabold">Time:</span> {order.time}</p>
                </div>
              </div>
            ))}
          </div>
          <Modal
            title={`Order #${selectedOrder?.consultationId}`}
            visible={modalVisible}
            onCancel={closeDetailsPopup}
            footer={null}
            className="max-w-md"
          >
            <p className="text-lg font-semibold mb-4">Appointment Details</p>
            <p><span className="font-semibold">Patient:</span> {selectedOrder?.patient.patName}</p>
            <p><span className="font-semibold">Doctor:</span> {selectedOrder?.doctor.docName}</p>
            <p><span className="font-semibold">Date:</span> {selectedOrder?.date}</p>
            <p><span className="font-semibold">Time:</span> {selectedOrder?.time}</p>
            <p><span className="font-semibold">Amount Paid:</span> ₹ {selectedOrder?.doctor.rate}</p>
            <p><span className="font-semibold">Prescription:</span> <button className='bg-purple-600 text-white font-semibold rounded p-1 cursor-pointer'>Download</button></p>
            {selectedOrder?.doctor.rating !== null ? (
              <p>You have already rated this doctor.</p>
            ) : (
              <div>
                <p className="text-lg font-semibold mt-6">Rate the doctor:</p>
                <Rate
                  onChange={handleRateChange}
                  className='text-purple-600 mt-2'
                  allowHalf
                  defaultValue={2.5}
                />
                <p className="text-lg font-semibold mt-4">Write a review:</p>
                <TextArea
                  rows={4}
                  value={review}
                  onChange={handleReviewChange}
                  className="mt-2"
                />
                <Button
                  type="primary"
                  onClick={handleSubmit}
                  className="mt-4"
                >
                  Submit
                </Button>
                {isRated && (
                  <p className="mt-2 text-green-600">Thank you for your feedback!</p>
                )}
              </div>
            )}
          </Modal>
        </main>
      </div>
    </>
  );
};

export default Doctor_History;
