import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  background?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
  flex?: boolean;
  itemsCenter?: boolean;
  justifycenter?: boolean;
  column?: boolean;
  height?: string;
  justifyaround?: boolean;
  justifybetween?: boolean;
}

const Box: React.FC<BoxProps> = ({
  children,
  className = "",
  style,
  border,
  borderRadius,
  width,
  height,
  padding,
  background = "transparent",
  flex = false,
  itemsCenter = false,
  justifycenter = false,
  justifyaround = false,
  justifybetween = false,
  column = false
}) => {
  return (
    <div 
      className={`relative ${flex ? 'flex' : ''} ${itemsCenter ? 'items-center' : ''} ${column ? 'flex-col' : ''} ${justifycenter ? 'justify-center' : ''} ${justifyaround ? 'justify-around' : ''} ${justifybetween ? 'justify-between' : ''} ${className}`}
      style={{
        height : height,
        border: border,
        borderRadius: borderRadius,
        width: width,
        padding: padding,
        background,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Box;
