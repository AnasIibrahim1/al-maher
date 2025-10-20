import Stars from "@/components/CardSpecialists/Stars/Stars";
import BusinessCard from "../BusinessCard/BusinessCard";
import "./style.css";
export default function FeedBackCards() {
  return (
    <div className="feed-back-cards-container" style={{width:"415px", height:"315px", borderRadius:"10px 10px 10% 10%", backgroundColor:"#4F5DE4", boxShadow:"0 15px 35px rgba(0,0,0,0.2)", position:"relative", zIndex:"0"}}>
      <div style={{width:"100%", height:"90%", position:"relative", backgroundColor:"#fff", borderRadius:"8px 8px 10% 10%"}}>
<div style={{ margin:"0px 20px", width:"90%", height:"100%", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"space-around"}}>
<Stars rating={4.5} size="medium" />
        <p style={{color:"gray", fontSize:"16px", fontWeight:"bold",}}>
        تشير الفصول المرنة إلى عملية اكتساب المعرفة أو المهارات من خلال استخدام التقنيات الرقمية والإنترنت
        </p>
        <BusinessCard/>
</div>

      </div>
    </div>
  );
}
