import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const OrthokIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="orthokGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      
      {/* Eye profile */}
      <path
        d="M10 32C10 32 18 18 32 18C46 18 54 32 54 32"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10 32C10 32 18 46 32 46C46 46 54 32 54 32"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      
      {/* Contact lens overlay */}
      <ellipse cx="32" cy="30" rx="14" ry="11" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#orthokGradient2)" />
      
      {/* Moon crescent */}
      <path
        d="M44 6C44 6 48 10 48 14C48 18 44 22 40 22C36 22 32 18 32 14C32 10 36 6 40 6C42 6 44 6 44 6Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <path
        d="M40 8C40 8 42 10 42 14C42 18 40 20 38 20"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="url(#orthokGradient2)"
      />
    </svg>
  );
};

export default OrthokIconV2;

