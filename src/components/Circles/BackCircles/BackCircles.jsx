import React from 'react'
import './BackCircles.css'

export default function BackCircles({ width, height, style, content, rotationSpeed = 20, image = ""}) {
  const containerStyle = {
    width: width,
    height: height,
  };

  const contentStyle = {
    backgroundColor: "white",
    width: "70%",
    height: "70%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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