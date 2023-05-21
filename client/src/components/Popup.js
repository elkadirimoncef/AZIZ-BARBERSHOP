import React from 'react';
import PopupForm from '../PopupForm';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <PopupForm onClose={onClose} />
      </div>
    </div>
  );
};

export default Popup;
