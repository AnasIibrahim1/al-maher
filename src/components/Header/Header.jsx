'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Image 
            src="/Logo/white_one.png" 
            alt="Logo" 
            width={120} 
            height={40}
            priority
          />
        </div>

        {/* Navigation Links */}
        <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#services">الخدمات</a></li>
            <li><a href="#courses">الدورات</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          {/* Search */}
          <div className="search-container">
            <button 
              className="search-toggle"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            
            {isSearchOpen && (
              <div className="search-dropdown">
                <form onSubmit={handleSearch} className="search-form">
                  <input
                    type="text"
                    placeholder="ابحث هنا..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    autoFocus
                  />
                  <button type="submit" className="search-submit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <button className="profile-btn" aria-label="Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          {/* Get in Touch Button */}
          <button className="get-in-touch-btn">
            تواصل معنا
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}