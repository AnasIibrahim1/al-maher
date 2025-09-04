import React from 'react'
import './GeneralBox.css'

// Children is the content of the box
export default function GeneralBox({children, backgroundColor, width, height, borderColor, padding}) {
  return (
    <div className="general-box-container" style={{backgroundColor: backgroundColor, width: width, height: height, borderRadius: "10px", border: `1px solid ${borderColor}`, display: "flex", flexDirection: "row", alignItems: "center", padding: padding}}>
        {children}
    </div>
  )
}   