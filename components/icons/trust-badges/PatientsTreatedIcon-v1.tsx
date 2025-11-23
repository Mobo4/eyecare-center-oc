import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const PatientsTreatedIconV1: React.FC<IconProps> = ({ 
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
        <linearGradient id="patientsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Group of people - simplified silhouettes */}
      {/* Person 1 (left) */}
      <circle cx="32" cy="50" r="12" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#patientsGradient1)" />
      <path d="M32 62V90" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M32 75L22 85" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M32 75L42 85" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      
      {/* Person 2 (center) */}
      <circle cx="64" cy="40" r="14" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#patientsGradient1)" />
      <path d="M64 54V95" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M64 70L52 82" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M64 70L76 82" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      
      {/* Person 3 (right) */}
      <circle cx="96" cy="50" r="12" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#patientsGradient1)" />
      <path d="M96 62V90" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M96 75L86 85" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M96 75L106 85" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      
      {/* Heart/Care symbol */}
      <path
        d="M64 100 C60 95, 50 95, 50 100 C50 105, 64 115, 64 115 C64 115, 78 105, 78 100 C78 95, 68 95, 64 100 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="url(#patientsGradient1)"
      />
    </svg>
  );
};

export default PatientsTreatedIconV1;

