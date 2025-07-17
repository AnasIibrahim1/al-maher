import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  centerItems?: boolean;
  justify?: 'center' | 'between' | 'around';
  items?: 'center' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  children,
  centerItems = false,
  justify = '',
  items = 'none',
  className = "",
  style,
}) => {
  const getJustifyClass = () => {
    switch(justify) {
      case 'between':
        return 'justify-between';
      case 'around':
        return 'justify-around';
      case 'center': 
        return 'justify-center';
      default:
        return '';
    }
  };
  const getitemsClass = () => {
    switch(items) {
      case 'center': 
        return 'items-center';
      default:
        return 'none';
    }
  };


  return (
    <div
      className={`w-full flex flex-col relative ${getJustifyClass()} ${getitemsClass()} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
