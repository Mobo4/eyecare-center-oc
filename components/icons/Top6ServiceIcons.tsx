/**
 * FILE: Top6ServiceIcons.tsx
 * VERSION: 2.0.0
 * PURPOSE: Additional service icons for Top 6 Orange County services
 *
 * DESIGN: Matches existing ServiceIcons.tsx style
 * - Medical blue (#1E40AF) strokes
 * - Mint-to-forest green gradients (#10B981 → #065F46)
 * - 2px stroke width, rounded line caps
 * - 64x64 viewBox (scalable SVG)
 *
 * NEW ICONS:
 * - KeratoconusIcon (irregular cornea shape with correction indicator)
 * - OrthoKIcon (eye with overnight lens + moon symbol)
 * - CornealCrosslinkingIcon (eye cornea with crosshatch strengthening pattern)
 */

import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 64,
  className = '',
  children,
  ...props
}) => (
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

/**
 * KERATOCONUS ICON
 * Shows irregular cornea shape being corrected/stabilized
 * Represents specialized keratoconus treatment
 */
export const KeratoconusIcon: React.FC<IconProps> = (props) => (
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

    {/* Irregular cornea shape (keratoconus bulge) - wavy/irregular */}
    <path
      d="M26 32 Q28 26 32 24 Q36 26 38 32 Q36 38 32 40 Q28 38 26 32Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="3 2"
      fill="none"
      opacity="0.7"
    />

    {/* Corrected/stabilized shape indicator - smooth circle */}
    <circle
      cx="32"
      cy="32"
      r="10"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="30 5"
      fill="none"
    />

    {/* Treatment success indicator (checkmark) */}
    <path
      d="M40 26L36 30L34 28"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

/**
 * ORTHOKERATOLOGY (ORTHO-K) ICON
 * Shows eye with overnight contact lens and moon/sleep symbol
 * Represents non-surgical overnight vision correction
 */
export const OrthoKIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye shape */}
    <path
      d="M32 18C20 18 10 32 10 32C10 32 20 46 32 46C44 46 54 32 54 32C54 32 44 18 32 18Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#iconGradient)"
    />

    {/* Overnight lens (larger diameter than regular contact lens) */}
    <path
      d="M18 32 C18 24 25 18 32 18 C39 18 46 24 46 32"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray="4 2"
      fill="none"
      opacity="0.8"
    />

    {/* Pupil/iris */}
    <circle cx="32" cy="32" r="6" stroke={strokeColor} strokeWidth={strokeWidth} />

    {/* Moon symbol (crescent) - overnight treatment indicator */}
    <path
      d="M50 14 C50 18 52 20 55 20 C52 20 50 22 50 26 C50 22 48 20 45 20 C48 20 50 18 50 14Z"
      fill={strokeColor}
      opacity="0.3"
    />

    {/* Sleep/stars indicator */}
    <path
      d="M52 8L53 10L55 10L53.5 11.5L54 13.5L52 12L50 13.5L50.5 11.5L49 10L51 10L52 8Z"
      fill={strokeColor}
      opacity="0.2"
    />
  </IconWrapper>
);

/**
 * CORNEAL CROSS-LINKING ICON
 * Shows eye cornea with crosshatch/strengthening pattern
 * Represents FDA-approved keratoconus progression treatment
 */
export const CornealCrosslinkingIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye shape */}
    <path
      d="M32 14C18 14 6 32 6 32C6 32 18 50 32 50C46 50 58 32 58 32C58 32 46 14 32 14Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#iconGradient)"
    />

    {/* Cornea area */}
    <circle
      cx="32"
      cy="32"
      r="12"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeOpacity="0.4"
      fill="none"
    />

    {/* Cross-linking pattern (crosshatch grid) */}
    {/* Vertical lines */}
    <path d="M26 24 L26 40" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
    <path d="M32 24 L32 40" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
    <path d="M38 24 L38 40" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />

    {/* Horizontal lines */}
    <path d="M24 26 L40 26" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
    <path d="M24 32 L40 32" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
    <path d="M24 38 L40 38" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />

    {/* Diagonal strengthening lines (cross-linking bonds) */}
    <path d="M26 26 L30 30" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
    <path d="M34 30 L38 26" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
    <path d="M26 38 L30 34" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
    <path d="M34 34 L38 38" stroke={strokeColor} strokeWidth="1" opacity="0.4" />

    {/* FDA-approved indicator (subtle checkmark) */}
    <path
      d="M42 22L44 24L48 20"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
  </IconWrapper>
);

/**
 * IPL DRY EYE TREATMENT ICON
 * Shows eye with IPL light therapy rays
 * Represents advanced dry eye treatment with Intense Pulsed Light
 */
export const IPLDryEyeIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    {/* Eye shape */}
    <path
      d="M32 16C20 16 10 32 10 32C10 32 20 48 32 48C44 48 54 32 54 32C54 32 44 16 32 16Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#iconGradient)"
    />

    {/* Iris */}
    <circle cx="32" cy="32" r="7" stroke={strokeColor} strokeWidth={strokeWidth} />

    {/* IPL light rays (from device) */}
    <path
      d="M54 20 L42 28"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="4 2"
      opacity="0.7"
    />
    <path
      d="M56 24 L44 30"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="4 2"
      opacity="0.7"
    />
    <path
      d="M58 28 L46 32"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray="4 2"
      opacity="0.7"
    />

    {/* IPL device indicator (light source) */}
    <circle cx="56" cy="24" r="4" stroke={strokeColor} strokeWidth={strokeWidth} fill="white" />
    <circle cx="56" cy="24" r="2" fill={strokeColor} opacity="0.3" />

    {/* Moisture/tear film indicator (droplet) */}
    <path
      d="M20 44 C20 46.5 18.5 48 16.5 48 C14.5 48 13 46.5 13 44 C13 42 16.5 38 16.5 38 C16.5 38 20 42 20 44Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="url(#iconGradient)"
      opacity="0.6"
    />
  </IconWrapper>
);
