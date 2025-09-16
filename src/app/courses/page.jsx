'use client'
import PopularCards from "@/components/Cards/PopularCards/PopularCards"
import PaginationPages from "@/components/PaginationPages/PaginationPages"
export default function CoursesPage() {
  return (
<>
{/* Head Section */}
<section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>الدورات</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / الدورات</p>
      </div>
    </section>

{/* Courses Section */}
<section style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
<div style={{width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"100px", marginTop:"100px"}}>
<PaginationPages>
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    <PopularCards/> 
    </PaginationPages>
</div>
</section>
</>
  )
}