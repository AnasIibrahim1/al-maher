'use client'
import React, { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (example: 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-title">
        <h2 style={{fontSize: "20px", fontWeight: "600", color: "black", textAlign: "center", maxWidth: "200px", margin: "0 auto"}}>Register Now and 
        Get a <span style={{color: "#F57005", fontWeight: "800"}}>50% Discount</span></h2>
      </div>
      
      <div className="counter-grid">
        {/* First Column */}
        <div className="counter-column">
          <div className="counter-item">
            <div className="counter-circle">
              <span className="counter-number">{timeLeft.seconds}</span>
            <span className="counter-label">ثانية</span>
            </div>
          </div>
          
          <div className="counter-item">
            <div className="counter-circle">
              <span className="counter-number">{timeLeft.minutes}</span>
            <span className="counter-label">دقيقة</span>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="counter-column">
          <div className="counter-item">
            <div className="counter-circle">
              <span className="counter-number">{timeLeft.hours}</span>
            <span className="counter-label">ساعة</span>
            </div>
          </div>
          
          <div className="counter-item">
            <div className="counter-circle">
              <span className="counter-number">{timeLeft.days}</span>
            <span className="counter-label">يوم</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
