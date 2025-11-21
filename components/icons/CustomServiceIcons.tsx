import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const GradientDef = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
      <stop offset="100%" stopColor="#065F46" stopOpacity="0.3" />
    </linearGradient>
  </defs>
);

const BaseIcon: React.FC<IconProps & { children: React.ReactNode; gradientId: string }> = ({
  size = 64,
  className = '',
  children,
  gradientId,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="#1E40AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <GradientDef id={gradientId} />
      {children}
    </svg>
  );
};

export const ComprehensiveExamIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} gradientId="grad-exam">
    {/* Eye Shape */}
    <path d="M32 48C44 48 54 40 58 32C54 24 44 16 32 16C20 16 10 24 6 32C10 40 20 48 32 48Z" fill="url(#grad-exam)" />
    <circle cx="32" cy="32" r="6" />
    {/* Magnifying Glass */}
    <path d="M46 46L54 54" />
    <circle cx="42" cy="42" r="10" strokeDasharray="40 20" />
  </BaseIcon>
);

export const LasikSurgeryIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} gradientId="grad-lasik">
    {/* Eye */}
    <path d="M32 46C44 46 54 38 58 30C54 22 44 14 32 14C20 14 10 22 6 30C10 38 20 46 32 46Z" fill="url(#grad-lasik)" />
    <circle cx="32" cy="30" r="6" />
    {/* Laser Beam */}
    <path d="M32 2 L32 24" strokeDasharray="4 2" />
    <path d="M28 2 L36 2" />
    {/* Impact point */}
    <circle cx="32" cy="30" r="2" fill="#1E40AF" />
  </BaseIcon>
);

export const ContactLensesIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} gradientId="grad-contact">
    {/* Finger Tip */}
    <path d="M22 62 V40 C22 30 42 30 42 40 V62" fill="url(#grad-contact)" />
    {/* Lens */}
    <path d="M16 24 C16 34 48 34 48 24" />
    <path d="M16 24 C16 18 48 18 48 24" strokeOpacity="0.5" />
  </BaseIcon>
);

export const CataractTreatmentIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} gradientId="grad-cataract">
    {/* Eye */}
    <path d="M32 48C44 48 54 40 58 32C54 24 44 16 32 16C20 16 10 24 6 32C10 40 20 48 32 48Z" fill="url(#grad-cataract)" />
    {/* Lens/Pupil with rays */}
    <circle cx="32" cy="32" r="8" />
    <path d="M32 20 V10" />
    <path d="M32 44 V54" />
    <path d="M44 32 H54" />
    <path d="M20 32 H10" />
    <path d="M40.5 23.5 L47.5 16.5" />
    <path d="M23.5 40.5 L16.5 47.5" />
    <path d="M40.5 40.5 L47.5 47.5" />
    <path d="M23.5 23.5 L16.5 16.5" />
  </BaseIcon>
);

export const DryEyeTherapyIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} gradientId="grad-dryeye">
    {/* Eye */}
    <path d="M32 46C44 46 54 38 58 30C54 22 44 14 32 14C20 14 10 22 6 30C10 38 20 46 32 46Z" fill="url(#grad-dryeye)" />
    <path d="M6 30 Q32 58 58 30" strokeOpacity="0.3" fill="none" />
    {/* Tear Drop */}
    <path d="M46 42 C46 47 50 50 53 50 C56 50 60 47 60 42 C60 38 53 32 53 32 C53 32 46 38 46 42 Z" fill="#1E40AF" fillOpacity="0.2" />
  </BaseIcon>
);

export const PediatricCareIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} gradientId="grad-pediatric">
    {/* Eye */}
    <path d="M32 44C42 44 50 37 54 30C50 23 42 16 32 16C22 16 14 23 10 30C14 37 22 44 32 44Z" fill="url(#grad-pediatric)" />
    {/* Heart Pupil */}
    <path d="M32 36 C34 36 36 34 36 32 C36 30 32 28 32 28 C32 28 28 30 28 32 C28 34 30 36 32 36 Z" fill="#1E40AF" stroke="none" />
    {/* Care Hands/Symbol below */}
    <path d="M18 50 C18 50 24 56 32 56 C40 56 46 50 46 50" />
  </BaseIcon>
);

