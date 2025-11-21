import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconProps> = ({ size = 64, className = '', children, ...props }) => (
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
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);

const strokeColor = "#1E40AF"; // Medical blue
const strokeWidth = 2;

export const EyeExamIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye shape */}
    <path
      d="M32 12C18 12 6 32 6 32C6 32 18 52 32 52C46 52 58 32 58 32C58 32 46 12 32 12Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#iconGradient)"
    />
    <circle cx="32" cy="32" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
    {/* Magnifying glass handle */}
    <path
      d="M46 46L54 54"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Checkmark hint inside/overlay */}
    <path
      d="M26 32L30 36L38 28"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const LasikIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye profile */}
    <path
      d="M32 48C42 48 54 36 54 32C54 28 42 16 32 16C22 16 10 28 10 32C10 36 22 48 32 48Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="url(#iconGradient)"
    />
    {/* Iris */}
    <circle cx="32" cy="32" r="7" stroke={strokeColor} strokeWidth={strokeWidth} />
    {/* Laser beam */}
    <path
      d="M56 8L36 28"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="4 4"
    />
    <path
      d="M52 4L32 24"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="4 4"
    />
    {/* Laser hit point sparkle */}
    <path d="M34 26L38 26M36 24L36 28" stroke={strokeColor} strokeWidth={strokeWidth} />
  </IconWrapper>
);

export const ContactLensIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Fingertip */}
    <path
      d="M24 60V40C24 35.5817 27.5817 32 32 32C36.4183 32 40 35.5817 40 40V60"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="white"
    />
    <path d="M24 60H40" stroke={strokeColor} strokeWidth={strokeWidth} />
    
    {/* Contact Lens */}
    <path
      d="M16 24C16 24 24 34 32 34C40 34 48 24 48 24"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="url(#iconGradient)"
    />
    <path
      d="M16 24C16 24 24 18 32 18C40 18 48 24 48 24"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray="2 2"
      opacity="0.6"
    />
  </IconWrapper>
);

export const CataractIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye */}
    <path
      d="M32 14C18 14 6 32 6 32C6 32 18 50 32 50C46 50 58 32 58 32C58 32 46 14 32 14Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="white"
    />
    {/* Lens with cloudiness representation/clearing */}
    <circle cx="32" cy="32" r="9" stroke={strokeColor} strokeWidth={strokeWidth} fill="url(#iconGradient)" />
    {/* Light rays / clarity */}
    <path d="M32 8V4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M32 60V56" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M56 32H60" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M4 32H8" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M49 15L52 12" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M15 49L12 52" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M49 49L52 52" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M15 15L12 12" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
  </IconWrapper>
);

export const DryEyeIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye bottom curve */}
    <path
      d="M10 32C10 32 18 48 32 48C46 48 54 32 54 32"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Eye top curve */}
    <path
      d="M10 32C10 32 18 16 32 16C46 16 54 32 54 32"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Tear drop */}
    <path
      d="M42 42C42 46.4183 38.4183 50 34 50C29.5817 50 26 46.4183 26 42C26 37.5817 34 28 34 28C34 28 42 37.5817 42 42Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="url(#iconGradient)"
    />
    {/* Moisture shimmer */}
    <path
      d="M36 40C36 40 38 42 38 44"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const PediatricIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Smaller Eye */}
    <path
      d="M24 24C16 24 8 32 8 32C8 32 16 40 24 40C32 40 40 32 40 32C40 32 32 24 24 24Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="white"
    />
    <circle cx="24" cy="32" r="5" stroke={strokeColor} strokeWidth={strokeWidth} />
    
    {/* Heart / Care symbol */}
    <path
      d="M46 20C43.2386 20 41 22.2386 41 25C41 22.2386 38.7614 20 36 20C33.2386 20 31 22.2386 31 25C31 33 41 42 41 42C41 42 51 33 51 25C51 22.2386 48.7614 20 46 20Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="url(#iconGradient)"
    />
  </IconWrapper>
);

