import DoubleCircles from "@/components/Circles/DoubleCircles/DoubleCircles";
import HeaderPargraph from "@/components/Paragraphs/Header/HeaderPargraph";

export default function AboutPage() {
  return (
    <>
    {/* Head Section */}
    <section style={{width: "100%", height: "60vh", backgroundColor: "#000", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>من نحن</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / من نحن</p>
      </div>
    </section>

    {/* About us */}
    <section style={{width: "100%", height: "100vh", position: "relative"}}>
      <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "20px", margin: "0 auto"}}>
          <div style={{width: "100%", height:"100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
            <div style={{display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
              <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>من نحن</h4>
              <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)"}} />
            </div>
            <HeaderPargraph title="العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة" color="#2A254D" alignItems="start" justifyContent="start" />
          </div>
          <div style={{width: "100%", height:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <DoubleCircles />
          </div>
      </div>
    </section>

    </>
  );
}


