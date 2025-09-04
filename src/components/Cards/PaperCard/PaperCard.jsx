import React from 'react'
import './PaperCard.css';

export default function PaperCard({alignItems, justifyContent, padding = '0px', content, backgroundColorGeneral, backgroundColor}) {
  return (
<div className="paper-card-container-general" style={{'--bg': backgroundColorGeneral}}>
<div className="paper-card-container" style={{display: 'flex', alignItems: alignItems, justifyContent: justifyContent, backgroundColor: backgroundColor}}>
        <div className="paper-card-content" style={{padding: padding}}>
            {content}
        </div>
    </div>
</div>
  )
}