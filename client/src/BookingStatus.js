import React, { useState } from 'react';
import './BookingStatus.css';

const BookingStatus = () => {
  const [bookingCode, setBookingCode] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleBookingCodeChange = (e) => {
    setBookingCode(e.target.value);
  };

  const handleCheckBookingStatus = (e) => {
    e.preventDefault();
    // Perform the logic to check the booking status based on the bookingCode
    // Example code to set the bookingStatus
    setBookingStatus('Confirmed'); // Replace with your logic

    // Clear the input field after checking the status
    setBookingCode('');
  };

  return (
    <div className="booking-status-container">
      <h2 className="booking-status-title">Check Booking Status</h2>
      <form className="booking-status-form" onSubmit={handleCheckBookingStatus}>
        <input
          type="text"
          placeholder="Enter your booking code"
          value={bookingCode}
          onChange={handleBookingCodeChange}
        />
        <button type="submit" className="check-status-button">
          Check Status
        </button>
      </form>
      {bookingStatus && (
        <div className="booking-status-result">
          <p>Your booking status: {bookingStatus}</p>
        </div>
      )}
    </div>
  );
};

export default BookingStatus;
