import DoubleCircles from "@/components/Circles/DoubleCircles/DoubleCircles";

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
          <div style={{backgroundColor : "red", width: "100%", height:"100%"}}>
            <h1>اليمين</h1>
          </div>
          <div style={{width: "100%", height:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <DoubleCircles />
          </div>
      </div>
    </section>

    </>
  );
}


