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
    <section style={{width: "100%", position: "relative", margin:"100px 0px"}}>
      <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "20px", margin: "0 auto",flexWrap: "wrap"}}>
          <div style={{width: "40%", height:"100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
            <div style={{display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
              <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>من نحن</h4>
              <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)"}} />
            </div>
            <h2 style={{color: "#2A254D", fontSize: "32px", fontWeight: "bold",margin:0}}>العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة</h2>
            <p style={{color: "#697585", fontSize: "16px", margin:0}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو مميزًا، وبالتالي فإن لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار</p>
              <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right", gap: "20px"}}>
            <img src="/icons/goal.svg" alt="" />
            <h4 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>أهدافنا</h4>
          </div>
          <p style={{color: "#697585", fontSize: "16px", margin:0}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو مميزًا، وبالتالي فإن لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار</p>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right", gap: "20px"}}>
            <img src="/icons/eye.svg" alt="" />
            <h4 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>رؤيتنا</h4>
          </div>
          <p style={{color: "#697585", fontSize: "16px", margin:0}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو مميزًا، وبالتالي فإن لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار</p>
          </div>
          
          <div style={{width: "50%", height:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <DoubleCircles />
          </div>
      </div>
    </section>

    {/* Percentages */}
    <section style={{width: "100%", height: "100vh", position: "relative", margin:"100px 0px"}}>

    </section>
    </>
  );
}


