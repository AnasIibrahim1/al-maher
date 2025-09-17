import TeamMemberCard from "@/components/Circles/TeamMemberCard/TeamMemberCard";

export default function TeacherPage() {
  const teachers = [
    { id: "ahmed", name: "أحمد محمد", jobTitle: "مدرب رياضيات", photo: "/People/man.jpg" },
    { id: "mona", name: "منى علي", jobTitle: "مدربة علوم", photo: "/People/man2.jpg" },
    { id: "khaled", name: "خالد سعيد", jobTitle: "مدرب برمجة", photo: "/People/man3.jpg" },
    { id: "sara", name: "سارة حسن", jobTitle: "مدربة لغة عربية", photo: "/People/man.jpg" },
  ];
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
      <div style={{width: "80%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: "30px", flexWrap: "wrap", position:"relative", marginBottom:"100px", marginTop:"100px"}}>
        {teachers.map(t => (
          <TeamMemberCard key={t.id} id={t.id} name={t.name} jobTitle={t.jobTitle} photo={t.photo} />
        ))}
      </div>
    </section>
</>
  );
}