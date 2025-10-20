'use client'
import HeaderPargraph from "@/components/Paragraphs/Header/HeaderPargraph"
import FAQCards from "@/components/Cards/FAQCards/FAQCards"
export default function FAQPage() {
  return (
<>
{/* Head Section */}
<section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>الأسئلة الشائعة</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / الأسئلة الشائعة</p>
      </div>
    </section>

{/* FAQ Section*/}
<section style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop:"100px" }}>
<div style={{width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"50px"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
      <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", margin: "0px"}}>الأسئلة الشائعة</h4>
      <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)", marginRight: "20px"}} />

      </div>
        <HeaderPargraph title="أكثر الأسئلة الشائعة & الاجابات" color="#2A254D" alignItems="center" justifyContent="center" style={{margin:"0px"}}/>
      </div>
        <div style={{width: "70%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"100px"}}>
    <FAQCards />

        </div>
</section>
</>
  )
}