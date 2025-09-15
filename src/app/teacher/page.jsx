import TeamMemberCard from "@/components/Circles/TeamMemberCard/TeamMemberCard";

export default function TeacherPage() {
  return (
<>
    {/* Head Section */}
    <section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>المدرسين</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / المدرسين</p>
      </div>
    </section>

    {/* Teachers Section */}
    <section style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "30px", flexWrap: "wrap", position:"relative", marginBottom:"100px", marginTop:"100px"}}>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
      </div>
    </section>
</>
  );
}