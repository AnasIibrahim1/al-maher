import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text 
}) => {
  const sizeMap = {
    small: { width: '20px', height: '20px', borderWidth: '2px' },
    medium: { width: '30px', height: '30px', borderWidth: '3px' },
    large: { width: '50px', height: '50px', borderWidth: '4px' }
  };

  const { width, height, borderWidth } = sizeMap[size];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}>
      <div style={{
        width,
        height,
        border: `${borderWidth} solid #e3e3e3`,
        borderTop: `${borderWidth} solid #169FC6`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      {text && (
        <p style={{
          color: '#169FC6',
          fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
          fontWeight: 'bold',
          margin: 0
        }}>
          {text}
        </p>
      )}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
};

export default LoadingSpinner; 