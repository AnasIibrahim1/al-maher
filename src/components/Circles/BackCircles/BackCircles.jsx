import React from 'react'
import './BackCircles.css'

export default function BackCircles({ width, height, style, content, rotationSpeed = 20}) {
  const containerStyle = {
    width: width,
    height: height,
  };

  const contentStyle = {
    backgroundColor: "blue",
    width: "70%",
    height: "70%",
  };

  return (
    <div className="back-circles-container" style={containerStyle}>
      <img 
        src="backcircle.svg" 
        alt="back-circles" 
        className="back-circles-image"
        style={{
          animationDuration: `${rotationSpeed}s`,
          ...style
        }}
      />
      <div className="back-circles-content" style={contentStyle}>
        {content}
      </div>
    </div>
  )
}