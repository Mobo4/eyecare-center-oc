import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const LasikSurgeryIconV1: React.FC<IconProps> = ({ 
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
        <linearGradient id="lasikGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
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
        fill="url(#lasikGradient1)"
      />
      
      {/* Iris */}
      <circle cx="32" cy="32" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
      
      {/* Precise laser beam */}
      <path d="M56 8L36 28" stroke={accentColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M52 4L32 24" stroke={accentColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      
      {/* Vision clarity indicator - light rays */}
      <path d="M32 8L32 4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M32 60L32 56" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M60 32L56 32" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M4 32L8 32" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default LasikSurgeryIconV1;

