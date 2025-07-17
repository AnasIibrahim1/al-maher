import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  color?: string;
  icon?: ReactNode;
  className?: string;
  width?: string;
  margin?: string;
  padding?: string;
}

const Input: React.FC<InputProps> = ({
  backgroundColor = "#fff",
  color = "#000",
  icon,
  className = "",
  style,
  width = "50%",
  height = "40px",
  padding = "12px",
  margin = "0",
  ...rest
}) => {
  return (
    <div
      className={`input-wrapper ${className}`}
      style={{ position: "relative", display: "flex", alignItems: "center", width: width, margin: margin,height: height, ...style }}
    >
      <input
        {...rest}
        style={{
          backgroundColor,
          color,
          paddingLeft: icon ? 36 : 12,
          paddingRight: 12,
          paddingTop: padding,
          paddingBottom: padding,
          height: 40,
          border: "1px solid #ccc",
          borderRadius: 6,
          width: "100%",
          outline: "none",
          ...(style as React.CSSProperties),
        }}
      />
            {icon && (
        <span
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
