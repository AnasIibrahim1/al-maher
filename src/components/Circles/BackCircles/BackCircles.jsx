import React from 'react'

export default function BackCircles({ width, height, style, content}) {
  return (
    <div className="back-circles-container" style={{ width: width, height: height, position: "relative" }}>
      <img src="backcircle.svg" alt="back-circles" style={{width: "100%", height: "100%", objectFit: "cover", ...style}}/>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "blue", width: "70%", height: "70%", zIndex: "1", borderRadius: "50%", padding: "50px"}}>
        {content}
      </div>
    </div>
  )
}