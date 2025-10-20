import React from 'react';
import Image from 'next/image';
import Category from "@/components/CardSpecialists/Category/Category";
import DateDisplay from "@/components/CardSpecialists/Date/Date";
import BusinessCard from "../BusinessCard/BusinessCard";
import './BlogDetailsCard.css';

export default function BlogDetailsCard({ 
  title, 
  category, 
  date, 
  image, 
  description, 
  author, 
  readTime 
}) {
  return (
    <div className="blog-details-card">
      {/* Blog Image */}
      <div className="blog-details-image-container">
        <Image 
          src={image} 
          alt={title}
          width={800}
          height={400}
          className="blog-details-image"
        />
      </div>

      {/* Meta Information */}
      <div className="blog-details-meta">
        <Category category={category} />
        <DateDisplay 
          date={date} 
          style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}} 
        />
      </div>

      {/* Title */}
      <h1 className="blog-details-title">{title}</h1>

      {/* Author and Read Time */}
      <div className="blog-details-author">
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <div style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#4F5DE4", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span style={{color: "#fff", fontWeight: "bold"}}>{author?.charAt(0)}</span>
          </div>
          <div>
            <p style={{margin: "0", fontWeight: "bold", color: "#2A254D"}}>{author}</p>
            <p style={{margin: "0", fontSize: "14px", color: "#666"}}>{readTime}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="blog-details-description">
        {description}
      </div>
    </div>
  );
}