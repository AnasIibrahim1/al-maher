"use client"

import React, { useState } from "react";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions

interface GeneralButtonProps {
  text: string;
  bgColor: string;
  width?: string;
  href?: string;
  margin?: string;
  color?: string;
  padding?: string;
  fontSize?: string;
  height?: string;
  fontWeight?: string;
  onClick?: () => void;

}

const GeneralButton: React.FC<GeneralButtonProps> = ({ 
  text, 
  bgColor, 
  margin,
  width = "fit-content",
  href,
  padding,
  height,
  color = "white",
  fontSize,
  fontWeight,
  onClick 
}) => {
  const [hover, setHover] = useState(false);

  const buttonContent = (
    <button 
      className={`text-white px-10 py-2 rounded-md cursor-pointer transition-all duration-300`}
      style={{
        backgroundColor: hover ? "#0E6983" : bgColor,
        width: width,
        margin: margin,
        color: hover ? "white" : color,
        padding: padding,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
        transition: "all 0.3s ease",

      }
    }
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
  return href ? (
    <Link className={`text-white rounded-md cursor-pointer`} href={href} style={{
      width: width,
      margin: margin
    }}  >
      {buttonContent}
    </Link>
  ) : buttonContent;
};

export default GeneralButton;
