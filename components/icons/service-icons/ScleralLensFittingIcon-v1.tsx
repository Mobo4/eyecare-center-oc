import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const ScleralLensFittingIconV1: React.FC<IconProps> = ({ 
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
        <linearGradient id="scleralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
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
        fill="url(#scleralGradient1)"
      />
      
      {/* Large diameter scleral lens */}
      <circle cx="32" cy="32" r="18" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
      <circle cx="32" cy="32" r="16" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" fill="none" />
      
      {/* Precision fit indicator - alignment marks */}
      <circle cx="32" cy="14" r="2" fill={strokeColor} />
      <circle cx="32" cy="50" r="2" fill={strokeColor} />
      <circle cx="14" cy="32" r="2" fill={strokeColor} />
      <circle cx="50" cy="32" r="2" fill={strokeColor} />
      
      {/* Custom fit lines */}
      <path d="M32 14L32 18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M32 50L32 46" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default ScleralLensFittingIconV1;

