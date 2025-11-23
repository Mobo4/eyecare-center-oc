import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const YearsExperienceIconV1: React.FC<IconProps> = ({ 
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
        <linearGradient id="yearsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Calendar/Timeline base */}
      <rect
        x="20"
        y="30"
        width="88"
        height="78"
        rx="8"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="url(#yearsGradient1)"
      />
      
      {/* Calendar header */}
      <rect
        x="20"
        y="30"
        width="88"
        height="24"
        rx="8"
        fill={strokeColor}
        fillOpacity="0.1"
      />
      
      {/* Calendar grid lines */}
      <line x1="42" y1="54" x2="42" y2="108" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.3" />
      <line x1="64" y1="54" x2="64" y2="108" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.3" />
      <line x1="86" y1="54" x2="86" y2="108" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.3" />
      <line x1="20" y1="70" x2="108" y2="70" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.3" />
      <line x1="20" y1="86" x2="108" y2="86" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.3" />
      
      {/* Medical cross element */}
      <g transform="translate(64, 78)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>
      
      {/* Timeline indicator */}
      <circle cx="64" cy="20" r="8" fill={strokeColor} />
      <path d="M64 12V4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default YearsExperienceIconV1;

