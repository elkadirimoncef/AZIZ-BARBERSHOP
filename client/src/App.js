import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Service from './Service';
import Popup from './components/Popup';
import BookingStatus from './BookingStatus';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking-status" element={<BookingStatus />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/bookings', { // Update the API endpoint URL to '/bookings'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data inserted successfully');
        // Perform any additional actions upon successful submission
      } else {
        console.error('Error inserting data');
        // Handle the error scenario
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle the error scenario
    }
  };

  return (
    <div>
      <Banner image="banner.jpg" title="Welcome to Our Barber Shop" />
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        <Service
          title="Coupe Normale"
          imageSrc="/service3.jpg"
          buttonText="Book Now"
          onButtonClick={openPopup}
        />
        <Service
          title="Barbe"
          imageSrc="/service2.jpg"
          buttonText="Book Now"
          onButtonClick={openPopup}
        />
        <Service
          title="Keratine"
          imageSrc="/service3.jpg"
          buttonText="Book Now"
          onButtonClick={openPopup}
        />
        <Service
          title="Barbe Et Coupe"
          imageSrc="/service1.jpg"
          buttonText="Book Now"
          onButtonClick={openPopup}
        />
      </div>
      {isPopupOpen && <Popup onClose={closePopup} onSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
