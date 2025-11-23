import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const PatientRatingIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="ratingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      
      {/* Star with excellence badge */}
      <g transform="translate(64, 50)">
        {/* Star shape */}
        <path
          d="M0 -25 L7.5 -7.5 L25 -7.5 L10 2.5 L15 20 L0 10 L-15 20 L-10 2.5 L-25 -7.5 L-7.5 -7.5 Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          fill="url(#ratingGradient2)"
        />
      </g>
      
      {/* Excellence badge circle */}
      <circle cx="64" cy="75" r="20" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#ratingGradient2)" />
      
      {/* Checkmark inside badge */}
      <path
        d="M56 75 L62 81 L72 71"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Rating display */}
      <text
        x="64"
        y="105"
        fontSize="16"
        fontWeight="bold"
        fill={strokeColor}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        4.9★ Rating
      </text>
    </svg>
  );
};

export default PatientRatingIconV2;

