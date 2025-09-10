import React, { useState, useEffect } from 'react';
import './Pagination.css';

export default function Pagination({ children }) {
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

  // Handle page navigation
  const handlePageChange = (newPage) => {
    if (newPage === currentPage || newPage < 0 || newPage >= totalPages) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Go to previous page
  const goToPrevious = () => {
    handlePageChange(currentPage - 1);
  };

  // Go to next page
  const goToNext = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pagination-normal-container">
      {/* Navigation arrows at the top */}
      {totalPages > 1 && (
        <div className="pagination-arrows-container">
          <button 
            className={`pagination-arrow prev ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={goToPrevious}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
          <button 
            className={`pagination-arrow next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
           
          </button>
        </div>
      )}

      {/* Content */}
      <div className="pagination-content-wrapper">
        <div className={`pagination-content ${isTransitioning ? 'transitioning' : ''}`}>
          {getCurrentPageItems()}
        </div>
      </div>
    </div>
  );
}
