/**
 * FILE: components/shared/MedicalDisclaimer.tsx
 * PURPOSE: Medical disclaimer component for E-E-A-T compliance on YMYL pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Required on all medical content pages per Google's YMYL guidelines.
 * Establishes transparency and protects against medical advice liability.
 */

'use client';

import { AlertCircle } from 'lucide-react';

interface MedicalDisclaimerProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export default function MedicalDisclaimer({
  className = '',
  variant = 'full'
}: MedicalDisclaimerProps) {
  if (variant === 'compact') {
    return (
      <div className={`text-sm text-gray-500 ${className}`}>
        <p>
          This information is for educational purposes only and is not a substitute for
          professional medical advice. Always consult with a qualified eye care professional
          for diagnosis and treatment.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-600">
          <p className="font-semibold text-gray-700 mb-2">Medical Disclaimer</p>
          <p className="mb-2">
            The information provided on this page is for educational and informational purposes
            only and is not intended as a substitute for professional medical advice, diagnosis,
            or treatment.
          </p>
          <p className="mb-2">
            Always seek the advice of your eye care professional or other qualified health
            provider with any questions you may have regarding a medical condition. Never
            disregard professional medical advice or delay in seeking it because of something
            you have read on this website.
          </p>
          <p>
            Individual results may vary. The information on this site does not establish a
            doctor-patient relationship.
          </p>
        </div>
      </div>
    </div>
  );
}
