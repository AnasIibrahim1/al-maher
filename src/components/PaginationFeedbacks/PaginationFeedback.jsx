import React, { useState, useEffect } from 'react';
import './PaginationFeedback.css';

export default function PaginationFeedback({ children }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [childrenArray, setChildrenArray] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate items per page based on screen width
  useEffect(() => {
    const calculateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) return 1;
      if (screenWidth < 1200) return 2;
      return 3;
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
    <div className="pagination-feedback-container">
      {/* Content */}
      <div className="pagination-feedback-content-wrapper">
        <div className={`pagination-feedback-content ${isTransitioning ? 'transitioning' : ''}`}>
          {getCurrentPageItems().map((item, index) => (
            <div 
              key={index} 
              className={`feedback-card ${index === Math.floor(itemsPerPage / 2) ? 'middle-card' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons at the bottom */}
      {totalPages > 1 && (
        <div className="pagination-feedback-buttons">
          <button 
            className={`pagination-feedback-btn prev ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={goToPrevious}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>

          </button>
          
          <button 
            className={`pagination-feedback-btn next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
