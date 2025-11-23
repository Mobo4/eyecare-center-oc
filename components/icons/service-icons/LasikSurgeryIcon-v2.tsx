import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const LasikSurgeryIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="lasikGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
      
      {/* Laser targeting point */}
      <circle cx="32" cy="28" r="6" stroke={accentColor} strokeWidth={strokeWidth} fill="url(#lasikGradient2)" />
      
      {/* Laser beam from top */}
      <path d="M32 0L32 22" stroke={accentColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      
      {/* Clarity indicator - focus lines */}
      <path d="M20 20L44 20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M20 44L44 44" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default LasikSurgeryIconV2;

