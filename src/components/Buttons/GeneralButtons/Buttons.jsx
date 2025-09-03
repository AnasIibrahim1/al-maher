import React from 'react';
import './Buttons.css';

const General_Button = ({children, backgroundColor, color, padding, border}) => {
  return (
    <button className="custom-button" style={{backgroundColor: backgroundColor, color: color, padding: padding, border:border}}>
      <div className="hover-overlay"></div>
            <div className="arrow-container">
        <span className="arrow" style={{color: color}}>←</span>
      </div>
      <span className="button-text">{children}</span>
      
    </button>
  );
};

export default General_Button;
