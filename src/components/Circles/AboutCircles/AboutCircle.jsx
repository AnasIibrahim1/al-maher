import React from 'react'
import IconButtons from '../../Buttons/IconButtons/IconButtons';  
import Image from 'next/image';
import "./style.css";
export default function AboutCircle({src}) {
  return (
    <div className="about-circle-container" style={{ width: "660px", height: "660px", position: "relative", borderRadius: "50%" }}>
      <img className="about-circle-image" src={src} alt="about-circles" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%"}}/>
      <div className="about-circle-overlay" style={{width: "50%", height: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "50%", background: "radial-gradient(circle, #FF7200 0%, #FFBF8C 39%, #FFFFFF 100%)", opacity: "0.5"}}>
      </div>
      <img src="/Lines.svg" alt="about-circles" style={{ position: "absolute", bottom: "0", right: "0", zIndex: "0"}}/>
      <img src="/Dotts.svg" alt="about-circles" style={{ position: "absolute", top: "40px", left: "40px", zIndex: "0"}}/>
      <div className="about-circle-content-box" style={{position: "absolute", bottom: "50px", left: "-100px", width: "380px", height: "120px"}}>
        <div style={{position:"relative", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px 45px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
        <p>هل تحتاج المزيد من المعلومات ؟</p>
        <h1>+(684) 555-0102</h1>

<div style={{position: "absolute", top: "50%", right: "-20px", transform: "translate(0%, -50%)"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px" icon={
        <Image src="/head.svg" alt="Icon" width={24} height={24} />
      } />
</div>
<div style={{position: "absolute", top: "25px", left: "0px", transform: "translate(0%, -50%)"}}>
        <Image src="/li.svg" alt="Icon" width={80} height={80} style={{transform: "rotateX(180deg)"}} />
</div>
        </div>
      </div>
    </div>
  )
}