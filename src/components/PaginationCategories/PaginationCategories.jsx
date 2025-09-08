import React, { useState, useEffect } from 'react';
import './PaginationCategories.css';

export default function PaginationCategories({ children }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [childrenArray, setChildrenArray] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate items per page based on screen width
  useEffect(() => {
    const calculateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      const gap = 20; // gap between items
      const itemWidth = screenWidth < 480 ? 200 : 310;
      const availableWidth = screenWidth - 60; // padding
      const items = Math.floor((availableWidth + gap) / (itemWidth + gap));
      return Math.max(1, items);
    };

    const updateItemsPerPage = () => {
      setItemsPerPage(calculateItemsPerPage());
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Calculate total pages and split children into pages
  useEffect(() => {
    const childrenList = React.Children.toArray(children);
    setChildrenArray(childrenList);
    setTotalPages(Math.ceil(childrenList.length / itemsPerPage));
    // Reset to first page if current page is out of bounds
    if (currentPage >= Math.ceil(childrenList.length / itemsPerPage)) {
      setCurrentPage(0);
    }
  }, [children, itemsPerPage, currentPage]);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return childrenArray.slice(startIndex, endIndex);
  };

  // Handle dot click to go to specific page
  const handleDotClick = (pageIndex) => {
    if (pageIndex === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Create pagination dots
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalPages; i++) {
      dots.push(
        <button
          key={i}
          className={`pagination-dot ${i === currentPage ? 'active' : ''}`}
          onClick={() => handleDotClick(i)}
          aria-label={`Go to page ${i + 1}`}
        />
      );
    }
    return dots;
  };

  return (
    <div className="pagination-categories-container">
      <div className="pagination-content-wrapper">
        <div className={`pagination-content ${isTransitioning ? 'transitioning' : ''}`}>
          {getCurrentPageItems()}
        </div>
      </div>
      
      {totalPages > 1 && (
        <div className="pagination-dots-container">
          {renderDots()}
        </div>
      )}
    </div>
  );
}
