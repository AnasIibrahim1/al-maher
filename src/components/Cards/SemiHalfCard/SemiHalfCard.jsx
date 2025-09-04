import React from 'react'
import './SemiHalfCard.css'

export default function SemiHalfCard({backgroundColorGeneral, justifyContent, alignItems, backgroundColorOverlay, content}) {
  return (
    <div className="semi-half-card-container-general" style = {{backgroundColor: backgroundColorGeneral, '--justify': justifyContent, '--align': alignItems}}>
        <div className="container-overlay" style = {{backgroundColor: backgroundColorOverlay}}></div>
    <div className="semi-half-card-content">
        {content}
</div>
    </div>
  )
}