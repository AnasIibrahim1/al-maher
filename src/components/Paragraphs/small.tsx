import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  color = "inherit",
  size,
  className = "",
  style,
  onClick,
}) => {
  return (
    <p
    onClick={onClick}
      className={className}
      style={{ color, fontSize: size, ...style }}
    >
      {children}
    </p>

  );
};

export default Paragraph;
