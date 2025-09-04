import React from 'react';
import './Buttons.css';

const General_Button = ({children, backgroundColor, color, padding, border, href}) => {
  return (
<a href={href}>
<button className="custom-button" style={{backgroundColor: backgroundColor, color: color, padding: padding, border:border}}>
      <div className="hover-overlay"></div>
      <span className="button-text">{children}</span>
      <div className="arrow-container">
      <svg className="arrow" style={{color: color}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"/>
        <path d="M12 19l-7-7 7-7"/>
      </svg>
      </div>
    </button>
</a>
  );
};

export default General_Button;
