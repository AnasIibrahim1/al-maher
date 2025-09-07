import './HomeCircle.css';
import General_Button from '../../Buttons/GeneralButtons/Buttons';
import PaperCard from '../../Cards/PaperCard/PaperCard';
export default function HomeCircle({image, backgroundColor, width, height, animationType = "gradient"}) {
  const containerStyle = {
    width: width,
    height: height,
  };

  const innerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div 
      className={`home-circle-container ${animationType === "rotate" ? "home-circle-rotating" : ""}`} 
      style={containerStyle}
    >
      <div className="home-circle-inner" style={innerStyle}>
        <img src={image} alt="home-circle" className="home-circle-image"/>
        <img src="/KWKB.svg" alt="brush" style={{position: "absolute", top: "10%", right: "5%"}}/>
        <img src="/edu.svg" alt="brush" style={{position: "absolute", top: "50px", left: "-60px", zIndex: "10"}}/>
        <img src="/bok.svg" alt="brush" style={{position: "absolute", bottom: "-5%", right: 0}}/>
        <img src="/Video.svg" alt="brush" style={{position: "absolute", top: "20%", right: "-20%"}}/>
      </div>
      
      
<div style={{position: "absolute", bottom: "0", left: "-10%"}}>
<PaperCard zIndex={1} width="210px" height="140px" content={
              <div style={{ width: "210px", height: "140px", borderRadius: "10px", padding: "30px"}}>
              <div style={{position: "relative", zIndex: "1"}}>
                  <p style={{fontSize: "12px"}}>اهلا بكم في موقعنا</p>
                  <p style={{fontSize: "12px"}}>مصمم مواقع وتطبيقات</p>
                  <General_Button backgroundColor="#4F5DE4" color="#fff" padding="0px 0px" border="1px solid #fff" href="https://www.google.com">
                      اضافة الدرس
                  </General_Button>
                  <div style={{position: "absolute", top: "-55px", right: "0", width: "55px", height: "55px", borderRadius: "50%", border: "10px solid #1e3a8a"}}>
                    <img src="/photo.jpg" alt="photo" style={{width: "100%", height: "100%", borderRadius: "50%"}}/>
                  </div>
              </div>
          </div>    
      } backgroundColorGeneral="#1e3a8a" backgroundColor="#fff" alignItems="start" justifyContent="start"    />
</div>
    </div>
  )
}