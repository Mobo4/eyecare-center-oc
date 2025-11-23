import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const DryEyeIplIconV1: React.FC<IconProps> = ({ 
  size = 64, 
  className = '', 
  ...props 
}) => {
  const strokeColor = "#1E40AF"; // Medical blue
  const accentColor = "#3B82F6"; // Light blue
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
        <linearGradient id="dryEyeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Eye shape */}
      <path
        d="M12 32C12 32 20 20 32 20C44 20 52 32 52 32C52 32 44 44 32 44C20 44 12 32 12 32Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="url(#dryEyeGradient1)"
      />
      
      {/* Iris */}
      <circle cx="32" cy="32" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
      
      {/* Tear drop */}
      <path
        d="M42 42C42 46 38 50 34 50C30 50 26 46 26 42C26 38 34 30 34 30C34 30 42 38 42 42Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="url(#dryEyeGradient1)"
      />
      
      {/* IPL light therapy rays */}
      <path d="M8 8L20 20" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeLinecap="round" />
      <path d="M56 8L44 20" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeLinecap="round" />
      <path d="M8 56L20 44" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeLinecap="round" />
      <path d="M56 56L44 44" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeLinecap="round" />
    </svg>
  );
};

export default DryEyeIplIconV1;

