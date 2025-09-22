'use client'
import PopularCards from "@/components/Cards/PopularCards/PopularCards"
import PaginationPages from "@/components/PaginationPages/PaginationPages"
import "./style.css"
import { courses } from "@/data/courses"
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
<div className="courses-section-container" style={{width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"100px", marginTop:"100px"}}>
<PaginationPages>
    {courses.map(c => (
      <PopularCards
        key={c.id}
        href={`/courses/${c.id}`}
        image={c.image}
        title={c.title}
        hours={c.features?.duration?.split(' ')[0] || '10'}
        rating={c.rating}
        reviews={c.reviews}
        price={c.price}
        lessons={c.features?.lessons || 0}
        instructor={c.instructor}
      /> 
    ))}
    </PaginationPages>
</div>
</section>
</>
  )
}