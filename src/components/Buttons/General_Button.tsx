import React from "react";
import Link from "next/link";

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
  const buttonContent = (
    <button 
      className={`text-white px-10 py-2 rounded-md cursor-pointer`}
      style={{
        backgroundColor: bgColor,
        width: width,
        margin: margin,
        color: color,
        padding: padding,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      onClick={onClick}
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
