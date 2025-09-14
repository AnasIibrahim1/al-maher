import React, { useState, useEffect } from 'react';
import './PaginationPages.css';

export default function PaginationPages({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [childrenArray, setChildrenArray] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate items per page based on screen width
  useEffect(() => {
    const calculateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) return 2; // 2 items per page on mobile
      if (screenWidth < 1200) return 4; // 4 items per page on tablet
      return 6; // 6 items per page on desktop (3 rows x 2 columns)
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
    if (currentPage > Math.ceil(childrenList.length / itemsPerPage)) {
      setCurrentPage(1);
    }
  }, [children, itemsPerPage, currentPage]);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return childrenArray.slice(startIndex, endIndex);
  };

  // Handle page navigation
  const handlePageChange = (newPage) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="pagination-pages-container">
      {/* Content Grid */}
      <div className="pagination-pages-content-wrapper">
        <div className={`pagination-pages-grid ${isTransitioning ? 'transitioning' : ''}`}>
          {getCurrentPageItems().map((item, index) => (
            <div key={index} className="pagination-pages-item">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Numbers */}
      {totalPages > 1 && (
        <div className="pagination-pages-numbers">
          <button 
            className={`pagination-pages-btn prev ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`pagination-pages-btn number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'dots' : ''}`}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={page === '...'}
              aria-label={page === '...' ? 'More pages' : `Go to page ${page}`}
            >
              {page}
            </button>
          ))}
          
          <button 
            className={`pagination-pages-btn next ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
