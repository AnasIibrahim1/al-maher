import React, { useState } from "react";

interface StarsProps {
  value?: number; // current rating (1-5)
  onChange?: (value: number) => void;
  size?: number | string;
  color?: string;
  className?: string;
}

const Stars: React.FC<StarsProps> = ({
  value = 0,
  onChange,
  size = 20,
  color = "#FACC15", // Tailwind yellow-400
  className = "",
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={`flex items-center gap-1 ${className}`} onMouseLeave={() => setHovered(null)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="cursor-pointer transition-colors duration-200"
          width={size}
          height={size}
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{
            color:
              (hovered !== null ? star <= hovered : star <= value)
                ? color
                : "#D1D5DB", // Tailwind gray-300
          }}
          onMouseEnter={() => setHovered(star)}
          onClick={() => onChange && onChange(star)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default Stars;
