import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const KeratoconusTreatmentIconV1: React.FC<IconProps> = ({ 
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
        <linearGradient id="keratoconusGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Eye with irregular cornea (cone shape) */}
      <path
        d="M12 32C12 32 20 20 32 20C44 20 52 32 52 32C52 32 44 44 32 44C20 44 12 32 12 32Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="url(#keratoconusGradient1)"
      />
      
      {/* Irregular cornea - cone shape protruding */}
      <path
        d="M32 20L28 28L32 36L36 28Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="url(#keratoconusGradient1)"
      />
      
      {/* Correction/stabilization lines */}
      <path d="M20 24L44 24" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeLinecap="round" />
      <path d="M20 40L44 40" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeLinecap="round" />
      
      {/* Stabilization indicator */}
      <circle cx="32" cy="32" r="6" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
};

export default KeratoconusTreatmentIconV1;

