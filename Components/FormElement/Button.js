import React from "react";
import style from "./form.module.css";
import { trackButtonClick } from "../../Utils/googleAnalytics";

const Button = ({ onClick, disabled, type, text, className, trackingData }) => {
  const handleClick = (e) => {
    // Track button click if tracking data is provided
    if (trackingData) {
      trackButtonClick(trackingData.buttonName || text, trackingData.location || 'Unknown');
    }
    
    // Call the original onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`${className} ${style.defult_button}`}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
