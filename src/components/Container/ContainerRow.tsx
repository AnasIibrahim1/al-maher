import React, { ReactNode } from "react";

interface ContainerRowProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  items?: 'center' | 'none';
  justify?: 'center' | 'between' | 'around' | '';
  gap?: string;
  wrap?: boolean;
}



const ContainerRow: React.FC<ContainerRowProps> = ({
  children,
  className = "",
  style,
  gap,
  wrap = false,
  items = 'none',
  justify = '',
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
        return '';
    }
  };
  return (
    <div
      className={`w-full flex flex-row ${getJustifyClass()} relative ${getitemsClass()} gap-${gap} ${wrap ? 'flex-wrap' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default ContainerRow;
