'use client'
import Link from 'next/link';
import PaginationPages from "@/components/PaginationPages/PaginationPages";
import BusinessCard from "@/components/Cards/BusinessCard/BusinessCard";
import Category from "@/components/CardSpecialists/Category/Category";
import DateDisplay from "@/components/CardSpecialists/Date/Date";
import { blogPosts } from "@/BlogData/blogPosts";

import "./style.css";
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

    {/* Blog Section */}
    <section style={{width: "100%", position: "relative", margin:"100px 0px", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{width: "80%", height: "100%", margin:"0 auto"}}>
        <PaginationPages>
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="blog-link">
              <div className="blog-section-item" style={{width:"420px", height:"480px", backgroundImage: `url('${post.image}')`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "12px", position: "relative", marginBottom: "150px", cursor: "pointer"}}>
                <div style={{width:"90%", backgroundColor: "white", position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", padding: "20px"}}>
                  <div style={{width:"100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Category category={post.category} />
                    <DateDisplay date={post.date} style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}} className="date-display"/>
                  </div>
                  <h3 style={{color: "#000", fontSize: "20px", fontWeight: "bold"}}>{post.title}</h3>
                  <div style={{width:"100%"}}>
                    <BusinessCard type="button" actionButton={() => {}}/>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </PaginationPages>
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