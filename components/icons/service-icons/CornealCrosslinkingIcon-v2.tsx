import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const CornealCrosslinkingIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="crosslinkingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
      
      {/* Cornea with diagonal crosshatch pattern */}
      <g transform="translate(32, 28) rotate(45)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="-8" y1="-4" x2="8" y2="4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="-4" y1="-8" x2="4" y2="8" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>
      
      {/* Cornea circle */}
      <circle cx="32" cy="28" r="12" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#crosslinkingGradient2)" />
    </svg>
  );
};

export default CornealCrosslinkingIconV2;

