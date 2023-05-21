import React, { useState } from 'react';
import './PopupForm.css';

const PopupForm = ({ onClose, onSelectService, price }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [provider, setProvider] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Provider:', provider);

    // Create an object with the form data
    const appointmentData = {
      name,
      email,
      date,
      time,
      provider,
    };

    try {
      // Send the form data to your server using an API request
      const response = await fetch('/api/create-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        // Appointment created successfully
        console.log('Appointment created!');
        // Show a confirmation message to the user
        window.alert('Appointment created successfully!');
      } else {
        // Error creating the appointment
        console.log('Error creating appointment');
        // Show an error message to the user
        window.alert('Error creating appointment. Please try again.');
      }
    } catch (error) {
      // Handle any network or server errors
      console.log('Error:', error);
      // Show an error message to the user
      window.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="popup-form">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Select a date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            placeholder="Select a time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="provider">Provider:</label>
          <select
            id="provider"
            name="provider"
            value={provider}
            onChange={(event) => setProvider(event.target.value)}
          >
            <option value="">Select a provider</option>
            <option value="Provider 1">Aziz</option>
            <option value="Provider 2">Hassn</option>
            <option value="Provider 3">Khalid</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="service">Service:</label>
          <p>{price}</p>
        </div>
        <div className="form-actions">
          <button type="submit">Confirm</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
