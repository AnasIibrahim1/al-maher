import React, { InputHTMLAttributes, ReactNode, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  color?: string;
  icon?: ReactNode;
  className?: string;
  width?: string;
  margin?: string;
  padding?: string;
  label?: string;
  border?: string;
  type?: string;
  showPasswordToggle?: boolean;
}

const Input: React.FC<InputProps> = React.memo(({
  backgroundColor = "#fff",
  color = "#000",
  icon,
  className = "",
  style,
  width = "50%",
  height = "40px",
  padding = "12px",
  margin = "0",
  label,
  border = "1px solid #ccc",
  value,
  type,
  onChange,
  showPasswordToggle = false,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = type === 'password';
  const currentType = isPasswordField && showPassword ? 'text' : type;

  return (
    <div
      className={`input-wrapper ${className}`}
      style={{ position: "relative", display: "flex", flexDirection: "column", width: width, margin: margin, ...style }}
    >
      {label && (
        <label
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            color: "black",
            fontWeight: "bold",
            textAlign: "right",
            marginRight: "10px",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center", height: height }}>
        <input
          {...rest}
          value={value}
          onChange={handleChange}
          type={currentType}
          style={{
            backgroundColor,
            color,
            paddingLeft: (icon || (isPasswordField && showPasswordToggle)) ? 36 : 12,
            paddingRight: 12,
            paddingTop: padding,
            paddingBottom: padding,
            height: 40,
            border: border,
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
        {isPasswordField && showPasswordToggle && (
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute", 
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </span>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
