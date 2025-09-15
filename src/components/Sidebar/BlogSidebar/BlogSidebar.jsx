import React, { useState } from 'react';
import { blogPosts, getCategoryCounts } from '@/BlogData/blogPosts';
import './BlogSidebar.css';

export default function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get latest posts (last 3)
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Get categories with actual counts
  const categories = getCategoryCounts();

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? '' : categoryName);
  };

  return (
    <div className="blog-sidebar">
      {/* Search Container */}

        <div className="search-container-blog">
          <input
            type="text"
            placeholder="ابحث في المدونة..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input-blog"
          />
          <div className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>

      {/* Categories Container */}
      <div className="sidebar-section">
        <h3 className="sidebar-title sidebar-title--dotted">الفئات</h3>
        <div className="categories-container">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-item category-item--clean ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
              aria-pressed={selectedCategory === category.name}
            >
              <span className="category-chevron">»</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts Container */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">أحدث المقالات</h3>
        <div className="latest-posts-container">
          {latestPosts.map((post) => (
            <div key={post.id} className="latest-post-item">
              <div className="latest-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="latest-post-content">
                <h4 className="latest-post-title">{post.title}</h4>
                <div className="latest-post-meta">
                  <span className="latest-post-category">{post.category}</span>
                  <span className="latest-post-date">
                    {post.date.toLocaleDateString('ar-SA')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {(searchTerm || selectedCategory) && (
        <div className="sidebar-section">
          <h3 className="sidebar-title">نتائج البحث ({filteredPosts.length})</h3>
          <div className="search-results">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="search-result-item">
                  <div className="search-result-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="search-result-content">
                    <h4 className="search-result-title">{post.title}</h4>
                    <p className="search-result-category">{post.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">لا توجد نتائج</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
