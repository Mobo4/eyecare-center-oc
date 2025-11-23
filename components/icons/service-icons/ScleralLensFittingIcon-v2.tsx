import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const ScleralLensFittingIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="scleralGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
      
      {/* Scleral lens - large diameter covering sclera */}
      <circle cx="32" cy="32" r="20" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#scleralGradient2)" />
      
      {/* Inner lens surface */}
      <circle cx="32" cy="32" r="12" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
      
      {/* Precision fit indicators - measurement lines */}
      <line x1="12" y1="32" x2="20" y2="32" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="32" x2="52" y2="32" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="12" x2="32" y2="20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="44" x2="32" y2="52" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default ScleralLensFittingIconV2;

