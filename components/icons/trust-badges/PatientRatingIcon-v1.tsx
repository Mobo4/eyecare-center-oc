import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const PatientRatingIconV1: React.FC<IconProps> = ({ 
  size = 128, 
  className = '', 
  ...props 
}) => {
  const strokeColor = "#1E40AF"; // Medical blue
  const strokeWidth = 3;
  const accentColor = "#3B82F6"; // Light blue

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
        <linearGradient id="ratingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="starGlow1" cx="50%" cy="50%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Main star */}
      <g transform="translate(64, 64)">
        <path
          d="M0 -30 L9 -9 L30 -9 L12 3 L19 24 L0 12 L-19 24 L-12 3 L-30 -9 L-9 -9 Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          fill="url(#ratingGradient1)"
        />
        
        {/* Subtle glow */}
        <circle cx="0" cy="0" r="35" fill="url(#starGlow1)" />
      </g>
      
      {/* Excellence indicator - checkmark */}
      <path
        d="M48 64 L58 74 L80 52"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Rating text */}
      <text
        x="64"
        y="100"
        fontSize="14"
        fontWeight="bold"
        fill={strokeColor}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        4.9★
      </text>
    </svg>
  );
};

export default PatientRatingIconV1;

