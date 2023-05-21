import React, { useState } from 'react';
import './Service.css';
import PopupForm from './PopupForm';

const Service = ({ title, imageSrc, buttonText }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBookNowClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="service-container">
      <h2 className="service-title">{title}</h2>
      <img className="service-image" src={imageSrc} alt={title} />
      <button className="service-button" onClick={handleBookNowClick}>
        {buttonText}
      </button>
      {showPopup && <PopupForm />}
    </div>
  );
}

export default Service;
