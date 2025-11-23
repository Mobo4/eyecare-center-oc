import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const OrthokIconV1: React.FC<IconProps> = ({ 
  size = 64, 
  className = '', 
  ...props 
}) => {
  const strokeColor = "#1E40AF"; // Medical blue
  const strokeWidth = 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="orthokGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Eye */}
      <path
        d="M12 32C12 32 20 20 32 20C44 20 52 32 52 32C52 32 44 44 32 44C20 44 12 32 12 32Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="url(#orthokGradient1)"
      />
      
      {/* Overnight contact lens */}
      <ellipse cx="32" cy="32" rx="12" ry="10" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
      <ellipse cx="32" cy="32" rx="10" ry="8" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" fill="none" />
      
      {/* Moon/sleep symbol */}
      <path
        d="M48 8C48 8 52 12 52 16C52 20 48 24 44 24C40 24 36 20 36 16C36 12 40 8 44 8C46 8 48 8 48 8Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="url(#orthokGradient1)"
      />
      
      {/* Sleep stars */}
      <circle cx="50" cy="12" r="1.5" fill={strokeColor} />
      <circle cx="54" cy="10" r="1" fill={strokeColor} />
    </svg>
  );
};

export default OrthokIconV1;

