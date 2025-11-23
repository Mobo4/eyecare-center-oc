import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const DryEyeIplIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="dryEyeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
      
      {/* Multiple tear drops */}
      <circle cx="38" cy="40" r="4" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#dryEyeGradient2)" />
      <circle cx="44" cy="44" r="3" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#dryEyeGradient2)" />
      
      {/* IPL treatment rays converging */}
      <path d="M4 4L28 28" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="1.5 1.5" strokeLinecap="round" />
      <path d="M60 4L36 28" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="1.5 1.5" strokeLinecap="round" />
      <path d="M32 0L32 24" stroke={accentColor} strokeWidth={strokeWidth} strokeDasharray="1.5 1.5" strokeLinecap="round" />
    </svg>
  );
};

export default DryEyeIplIconV2;

