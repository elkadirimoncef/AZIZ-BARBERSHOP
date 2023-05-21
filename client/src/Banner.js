import React from 'react';
import './Banner.css';
import bannerPic from '../src/bannerpic.jpg';

const Banner = ({ title, subtitle, buttonText }) => {
  return (
    <div className="banner">
      <div className="banner-image-container">
        <img className="banner-image" src={bannerPic} alt="Banner" />
      </div>
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-subtitle">{subtitle}</p>
        <button className="banner-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Banner;
