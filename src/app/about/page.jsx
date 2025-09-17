import DoubleCircles from "@/components/Circles/DoubleCircles/DoubleCircles";
import DottedCard from "@/components/Cards/DottedCard/DottedCard";
import PaginationFeedback from "@/components/PaginationFeedbacks/PaginationFeedback";
import HeaderPargraph from "@/components/Paragraphs/Header/HeaderPargraph";
import Pagination from "@/components/PaginationNormal/Pagination";
import PopularCards from "@/components/Cards/PopularCards/PopularCards";
import FeedBackCards from "@/components/Cards/FeebackCards/FeedBackCards";
import TeamMemberCard from "@/components/Circles/TeamMemberCard/TeamMemberCard";
import { getTeam } from "@/data/team";

import "./style.css";

export default function AboutPage() {
  const team = getTeam();
  return (
    <>
    {/* Head Section */}
    <section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>من نحن</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / من نحن</p>
      </div>
    </section>

    {/* About us */}
    <section style={{width: "100%", position: "relative", margin:"100px 0px"}}>
      <div className="about-us-container" style={{width: "80%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "20px", margin: "0 auto",flexWrap: "wrap"}}>
          <div className="about-us-container-left" style={{width: "40%", height:"100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
            <div style={{display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
              <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>من نحن</h4>
              <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)"}} />
            </div>
            <h2 style={{color: "#2A254D", fontSize: "32px", fontWeight: "bold",margin:0}}>العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة</h2>
            <p style={{color: "#697585", fontSize: "16px", margin:0}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو مميزًا، وبالتالي فإن لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار</p>
              <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right", gap: "20px", margin:"20px 0"}}>
            <img src="/icons/goal.svg" alt="" />
            <h4 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>أهدافنا</h4>
          </div>
          <p style={{color: "#697585", fontSize: "16px", margin:0}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو مميزًا، وبالتالي فإن لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار</p>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right", gap: "20px", margin:"20px 0"}}>
            <img src="/icons/eye.svg" alt="" />
            <h4 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>رؤيتنا</h4>
          </div>
          <p style={{color: "#697585", fontSize: "16px", margin:0}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو مميزًا، وبالتالي فإن لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار</p>
          </div>
          
          <div className="about-us-container-right" style={{width: "50%", height:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <DoubleCircles />
          </div>
      </div>
    </section>

    {/* Percentages */}
    <section style={{width: "100%", position: "relative", margin:"200px 0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <img src="/Shapes/books.svg" alt="" style={{position: "absolute", bottom: "0", left: "0"}} />
      <img src="/Shapes/lamb.svg" alt="" style={{position: "absolute", bottom: "0", right: "0"}} />
      <img src="/Shapes/dab.svg" alt="" style={{position: "absolute", bottom: "40%", right: "0"}} />
    <div style={{width: "80%", height: "50%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "40px", margin: "0 auto",flexWrap: "wrap", borderRadius: "10px"}}>
      <DottedCard content={<div>
        <h1 style={{color: "#F57005", fontSize: "50px", fontWeight: "bold", margin:0, padding:0}}>88.9%</h1>
        <p style={{color: "#000", fontSize: "24px", margin:0, padding:0}}>أفضل تقييم</p>
      </div>} />
      <DottedCard content={<div>
        <h1 style={{color: "#F57005", fontSize: "50px", fontWeight: "bold", margin:0, padding:0}}>88.9%</h1>
        <p style={{color: "#000", fontSize: "24px", margin:0, padding:0}}>أفضل تقييم</p>
      </div>} />
            <DottedCard content={<div>
        <h1 style={{color: "#F57005", fontSize: "50px", fontWeight: "bold", margin:0, padding:0}}>88.9%</h1>
        <p style={{color: "#000", fontSize: "24px", margin:0, padding:0}}>أفضل تقييم</p>
      </div>} />
            <DottedCard content={<div>
        <h1 style={{color: "#F57005", fontSize: "50px", fontWeight: "bold", margin:0, padding:0}}>88.9%</h1>
        <p style={{color: "#000", fontSize: "24px", margin:0, padding:0}}>أفضل تقييم</p>
      </div>} />
    </div>
    </section>

    {/* Popular Course */}
    <section style={{width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin:"100px 0px"}}>
      <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"50px"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
      <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", margin: "0px"}}>الدورات الأشهر</h4>
      <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)", marginRight: "20px"}} />

      </div>
        <HeaderPargraph title="الدورات الأشهر في هذا الشهر" color="#2A254D" alignItems="center" justifyContent="center" style={{margin:"0px"}}/>
      </div>

      <Pagination>
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
      </Pagination>
    </section>

    {/* Feedbacks */}
    <section style={{width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin:"100px 0px"}}>
    <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"50px"}}>
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
      <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", margin: "0px"}}>اراء الطلاب</h4>
      <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)", marginRight: "20px"}} />
      </div>
      <HeaderPargraph title="ما هي تعليقات طلابنا" color="#2A254D" alignItems="center" justifyContent="center" style={{margin:"0px"}}/>
      </div>
        <PaginationFeedback>
          <FeedBackCards/>  
          <FeedBackCards/>
          <FeedBackCards/>
          <FeedBackCards/>
          <FeedBackCards/>
          <FeedBackCards/>
        </PaginationFeedback>
    </section>

    {/* Our Team */}
    <section style={{width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin:"100px 0px"}}>
    <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"50px"}}>
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
      <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", margin: "0px"}}>فريقنا</h4>
      <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)", marginRight: "20px"}} />
      </div>
      <HeaderPargraph title="تعرف على فريقنا المتميز من الخبراء والمدربين" color="#2A254D" alignItems="center" justifyContent="center" style={{margin:"0px", maxWidth:"50%", textAlign:"center"}}/>
      </div>

      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "30px", flexWrap: "wrap", position:"relative", marginBottom:"100px"}}>
        {team.map(member => (
          <TeamMemberCard key={member.id} id={member.id} name={member.name} jobTitle={member.jobTitle} photo={member.photo} />
        ))}
        <img src="/BackgroundsEffects/Base3.svg" alt="" style={{position:"absolute", bottom:"0", left:"0", zIndex:"-1"}} />
        </div>
    </section>


    {/* Subscribe Section */}
    <section className="subscribe-section-container" style={{width: "100%", height:"50vh", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div className="subscribe-section" style={{width: "90%", height: "80%", borderRadius:"10px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", position:"relative", backgroundColor:"#4F5DE4", overflow:"hidden"}}>
        <img src="/Shapes/1.svg" alt="" style={{position:"absolute", bottom:"0", left:"0"}}/>
        <img src="/Shapes/2.svg" alt="" style={{position:"absolute", right:"0", bottom:"0", height:"100%"}}/>
        <h1 style={{color:"#fff", fontSize:"40px", fontWeight:"bold", margin:"0px", padding:"0px",zIndex:"1", textAlign:"right", maxWidth:"50%", marginRight:"20px"}}>اشترك في النشرة الإخبارية لدينا للحصول على التحديثات اليومية</h1>
        <div className="subscribe-section-input" style={{width:"50%", height:"50px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"10px", zIndex:"1"}}>
          <button style={{width:"160px", height:"100%", backgroundColor:"#F57005", color:"white", border:"none", borderRadius:"5px", fontSize:"20px", fontWeight:"bold", cursor:"pointer"}}>اشتراك</button>
          <input type="email" placeholder="ادخل بريدك الالكتروني" style={{width:"50%", height:"100%", backgroundColor:"rgb(255, 255, 255)", border:"1px solid rgba(255,255,255,0.3)", borderRadius:"5px", padding:"0px 20px", color:"#000", fontSize:"16px"}} />
        </div>
      </div>
    </section>
    </>
  );
}


