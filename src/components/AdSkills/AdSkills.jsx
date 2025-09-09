import BackCircles from '../Circles/BackCircles/BackCircles';
import General_Button from '../Buttons/GeneralButtons/Buttons';
export default function AdSkills() {
  return (
    <div style={{width: "100%", height:"60vh", margin: "100px auto", backgroundColor: "#fff", position: "relative", marginTop: "100px"}}>   
<div style={{width:"80%", height:"80%", margin: "0 auto", backgroundColor: "#4F5DE4", position: "relative", borderRadius: "10px"}}>
    <div style={{position: "absolute", top: 0, left: "40%"}}>
        <img src="/People/teacher.svg" alt="teacher" />
    </div>
    <div style={{position: "absolute", top: "-100px", RIGHT: "0"}}>
        <BackCircles image="/photo.jpg" />
    </div>
    <div style={{position: "absolute", top: "0", left: "0"}}>
        <img src="/prush.svg" alt="" />
    </div>
    <div style={{position: "absolute", bottom: "-9px", left:"0"}}>
        <img src="/vector.png" alt="" />
    </div>
    <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "center", width: "100%", height: "100%",transform: "translateX(5%)", position: "relative"}}>
        <img src="/getur.png" alt="" style={{position: "absolute", top: "30%", left: "20%"}}  />
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>شهادة المهارات من الايدولرن</h1>
        <div style={{position: "absolute", top: "60%", left: "29%"}}>
        <General_Button backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" href="https://www.google.com">
        إبحث عن دروسك !
        </General_Button>
        </div>

        </div>
    </div>
</div>

  )
}