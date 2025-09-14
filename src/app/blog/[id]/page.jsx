'use client'
import { use } from 'react';
import BlogDetailsCard from "@/components/Cards/BlogDetailsCard/BlogDetailsCard";
import BlogSidebar from "@/components/Sidebar/BlogSidebar/BlogSidebar";
import { getBlogPostById, getRelatedPosts } from "@/BlogData/blogPosts";
import "./style.css";

export default function BlogDetails({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  
  // Get blog data from the BlogData folder
  const blogData = getBlogPostById(resolvedParams.id);
  const relatedPosts = getRelatedPosts(resolvedParams.id, 3);
  
  // If blog post not found, show 404 or redirect
  if (!blogData) {
    return (
      <div style={{padding: "100px 20px", textAlign: "center"}}>
        <h1 style={{color: "#2A254D", fontSize: "32px"}}>المقال غير موجود</h1>
        <p style={{color: "#666", fontSize: "18px", marginTop: "20px"}}>عذراً، المقال الذي تبحث عنه غير موجود.</p>
      </div>
    );
  }

  return (
    <>
      {/* Head Section */}
      <section style={{width: "100%", height: "60vh", backgroundImage: `url('${blogData.image}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
        <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)"}}>
          <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold", textAlign: "center", marginBottom: "10px"}}>{blogData.title}</h1>
          <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / المدونة / {blogData.title}</p>
        </div>
      </section>

      {/* Blog Details Section */}
      <section style={{width: "100%", position: "relative", margin:"100px 0px", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "90%", height: "100%", margin:"0 auto", display: "flex", flexDirection: "row", gap: "40px", alignItems: "flex-start"}}>
          {/* Main Blog Content */}
          <div style={{flex: "1", minWidth: "0"}}>
            <BlogDetailsCard 
              title={blogData.title}
              category={blogData.category}
              date={blogData.date}
              image={blogData.image}
              description={blogData.description}
              author={blogData.author}
              readTime={blogData.readTime}
            />
          </div>

          {/* Blog Sidebar */}
          <div style={{flex: "0 0 350px"}}>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
