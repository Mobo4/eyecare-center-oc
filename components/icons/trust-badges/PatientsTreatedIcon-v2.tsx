import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const PatientsTreatedIconV2: React.FC<IconProps> = ({ 
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
        <linearGradient id="patientsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      
      {/* Community circle - overlapping circles representing community */}
      <circle cx="40" cy="50" r="18" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#patientsGradient2)" />
      <circle cx="64" cy="40" r="20" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#patientsGradient2)" />
      <circle cx="88" cy="50" r="18" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#patientsGradient2)" />
      
      {/* Care symbol - medical cross with heart */}
      <g transform="translate(64, 85)">
        {/* Heart shape */}
        <path
          d="M0 -8 C-6 -12, -12 -8, -12 -4 C-12 0, 0 8, 0 8 C0 8, 12 0, 12 -4 C12 -8, 6 -12, 0 -8 Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="url(#patientsGradient2)"
        />
        {/* Medical cross overlay */}
        <line x1="-6" y1="0" x2="6" y2="0" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1="0" y1="-6" x2="0" y2="6" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default PatientsTreatedIconV2;

