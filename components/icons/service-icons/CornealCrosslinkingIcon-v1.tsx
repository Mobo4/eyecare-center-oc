import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const CornealCrosslinkingIconV1: React.FC<IconProps> = ({ 
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
        <linearGradient id="crosslinkingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
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
        fill="url(#crosslinkingGradient1)"
      />
      
      {/* Cornea with crosshatch/strengthening pattern */}
      <g transform="translate(32, 28)">
        {/* Horizontal strengthening lines */}
        <line x1="-10" y1="-6" x2="10" y2="-6" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="-10" y1="6" x2="10" y2="6" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        
        {/* Vertical strengthening lines */}
        <line x1="-6" y1="-10" x2="-6" y2="10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="6" y1="-10" x2="6" y2="10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>
      
      {/* Cornea outline */}
      <ellipse cx="32" cy="28" rx="12" ry="10" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
};

export default CornealCrosslinkingIconV1;

