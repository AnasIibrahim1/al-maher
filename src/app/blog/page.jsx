'use client'
import PaginationPages from "@/components/PaginationPages/PaginationPages";
export default function Blog() {
  return (
    <>
        {/* Head Section */}
        <section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>المدونة</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / المدونة</p>
      </div>
    </section>
    </>
  )
}

/*
<PaginationPages>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
  </PaginationPages>
*/