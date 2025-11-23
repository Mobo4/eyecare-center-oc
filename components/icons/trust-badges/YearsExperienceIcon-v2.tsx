import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const YearsExperienceIconV2: React.FC<IconProps> = ({ 
  size = 128, 
  className = '', 
  ...props 
}) => {
  const strokeColor = "#1E40AF"; // Medical blue
  const strokeWidth = 3;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="yearsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      
      {/* Timeline ribbon */}
      <path
        d="M20 64 Q64 20 108 64 Q64 108 20 64 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="url(#yearsGradient2)"
      />
      
      {/* Timeline markers */}
      <circle cx="32" cy="64" r="6" fill={strokeColor} />
      <circle cx="64" cy="40" r="6" fill={strokeColor} />
      <circle cx="96" cy="64" r="6" fill={strokeColor} />
      
      {/* Medical cross in center */}
      <g transform="translate(64, 64)">
        <rect x="-10" y="-2" width="20" height="4" rx="2" fill={strokeColor} />
        <rect x="-2" y="-10" width="4" height="20" rx="2" fill={strokeColor} />
      </g>
      
      {/* Years indicator */}
      <text
        x="64"
        y="90"
        fontSize="16"
        fontWeight="bold"
        fill={strokeColor}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        35+
      </text>
    </svg>
  );
};

export default YearsExperienceIconV2;

