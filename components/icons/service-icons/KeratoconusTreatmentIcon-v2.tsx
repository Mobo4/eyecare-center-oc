import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const KeratoconusTreatmentIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="keratoconusGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
      
      {/* Cornea with irregular shape (before) */}
      <ellipse cx="32" cy="28" rx="8" ry="6" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" fill="none" />
      
      {/* Corrected cornea (after) */}
      <ellipse cx="32" cy="28" rx="8" ry="4" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#keratoconusGradient2)" />
      
      {/* Correction arrow */}
      <path d="M48 28L56 28" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M52 24L56 28L52 32" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
    </svg>
  );
};

export default KeratoconusTreatmentIconV2;

