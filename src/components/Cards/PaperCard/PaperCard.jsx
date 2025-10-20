import React from 'react'
import './PaperCard.css';

export default function PaperCard({alignItems, justifyContent, padding = '0px', content, backgroundColorGeneral, backgroundColor, zIndex = 100, width, height, paddingCard = '0px'}) {
  return (
<div className="paper-card-container-general" style={{'--bg': backgroundColorGeneral, zIndex: zIndex, width: width, height: height}}>
<div className="paper-card-container" style={{display: 'flex', alignItems: alignItems, justifyContent: justifyContent, backgroundColor: backgroundColor}}>
        <div className="paper-card-content" style={{padding: padding}}>
            {content}
        </div>
    </div>
</div>
  )
}