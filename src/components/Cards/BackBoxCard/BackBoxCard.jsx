import React from 'react'
import './BackBoxCard.css';

// content is a React node, image is the background image URL
export default function BackBoxCard({content, backgroundColor, image}) {
  return (
    <div className="back-box-card-container">
        <div className="overlay-box" style={{backgroundColor: backgroundColor}}></div>
        <div className="back-box-card" style={{backgroundImage: `url(${image})`}}>
            <div className="box-card-content">
                {content}
            </div>
            <div className="card-overlay"></div>
        </div>
    </div>
  )
}   