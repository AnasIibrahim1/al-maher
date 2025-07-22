/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import './box.css'

interface AdsBoxProps {
  images: string[];
  autoPlayInterval?: number; // ms
  children?: React.ReactNode;
}

type SlideDirection = 'left' | 'right';

const AdsBox: React.FC<AdsBoxProps> = ({ images, autoPlayInterval = 4000 ,children}) => {
  const [current, setCurrent] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<SlideDirection>('left');
  const [isSliding, setIsSliding] = useState(false);
  const total = images.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay effect
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      slideTo((current + 1) % total, 'left');
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [total, autoPlayInterval, current]);

  // Clean up slide timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const slideTo = (idx: number, dir: SlideDirection) => {
    if (isSliding || idx === current) return;
    setDirection(dir);
    setNextIndex(idx);
    setIsSliding(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      setNextIndex(null);
      setIsSliding(false);
    }, 400);
  };

  const handlePrev = () => {
    slideTo((current + 1) % total, 'right');
  };

  const handleNext = () => {
    slideTo((current - 1 + total) % total, 'left');
  };

  const handleGoTo = (idx: number) => {
    if (idx === current) return;
    slideTo(idx, idx > current ? 'left' : 'right');
  };

  // Calculate slide positions
  const getSlideClass = (imgIdx: number) => {
    if (imgIdx === current && nextIndex === null) return 'translate-x-0 z-10';
    if (imgIdx === current && nextIndex !== null) {
      return direction === 'left' ? '-translate-x-full z-0' : 'translate-x-full z-0';
    }
    if (imgIdx === nextIndex) {
      return direction === 'left' ? 'translate-x-full z-20' : '-translate-x-full z-20';
    }
    return 'hidden';
  };

  return (
    <div className="w-full h-[60vh] mt-30 mb-30 relative flex flex-col items-center justify-center ad-container">
      <div className="w-[80%] h-full mx-auto relative overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        {[current, nextIndex].filter((v, i, a) => v !== null && a.indexOf(v) === i).map((imgIdx) => (
          <img
            key={imgIdx as number}
            src={images[imgIdx as number]}
            alt={`Ad ${Number(imgIdx) + 1}`}
            className={`w-full h-full  absolute top-0 left-0 transition-transform duration-400 ${getSlideClass(imgIdx as number)} ${isSliding && imgIdx === nextIndex ? 'animate-slide-in' : ''} ${isSliding && imgIdx === current ? 'animate-slide-out' : ''}`}
            style={{ pointerEvents: 'none' }}
          />
        ))}
        {/* Navigation arrows - only show if multiple images */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md z-30 transition-transform active:scale-90"
              aria-label="Previous"
              disabled={isSliding}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md z-30 transition-transform active:scale-90"
              aria-label="Next"
              disabled={isSliding}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </>
        )}
      </div>
      {/* Pagination dots - only show if multiple images */}
      {total > 1 && (
        <div className="flex gap-2 justify-center items-center mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleGoTo(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 outline-none border-none focus:ring-2 focus:ring-[#169FC6] ${current === idx && !isSliding ? "bg-[#169FC6] scale-125 shadow-lg" : "bg-gray-300 hover:scale-110"}`}
              aria-label={`Go to slide ${idx + 1}`}
              disabled={isSliding}
              style={{ transitionProperty: 'background, transform, box-shadow' }}
            />
          ))}
        </div>
      )}
      {/* Custom slide animations */}
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.4s forwards;
        }
        .animate-slide-out {
          animation: slideOut 0.4s forwards;
        }
        @keyframes slideIn {
          from { transform: var(--slide-from); }
          to { transform: translateX(0); }
        }
        @keyframes slideOut {
          from { transform: translateX(0); }
          to { transform: var(--slide-to); }
        }
      `}</style>
      {children}
    </div>
  );
};

export default AdsBox;
