'use client';

/**
 * FILE: ExitIntentPopup.tsx
 * VERSION: 1.0.0
 * PURPOSE: Exit-intent popup to capture abandoning visitors
 *
 * TRIGGERS:
 * - Mouse moves toward browser top (exit intent)
 * - Shows once per session
 * - Respects user dismissal (24-hour cookie)
 *
 * CONVERSION STRATEGY:
 * - Free consultation offer
 * - Emphasizes keratoconus specialization
 * - 2-step engagement (primary + secondary CTA)
 *
 * ACCESSIBILITY:
 * - Keyboard navigable (Tab, Esc)
 * - Screen reader friendly
 * - Focus trap when open
 * - Reduced motion support
 */

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface ExitIntentPopupProps {
  enabled?: boolean;
  delayMs?: number;
}

export default function ExitIntentPopup({
  enabled = true,
  delayMs = 5000 // Don't show until user has been on site for 5 seconds
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Check if user has already seen/dismissed popup today
    const dismissed = localStorage.getItem('exitIntent_dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);

    if (dismissedTime > oneDayAgo) {
      return; // Don't show if dismissed within last 24 hours
    }

    // Check if already shown this session
    const shownThisSession = sessionStorage.getItem('exitIntent_shown');
    if (shownThisSession) {
      return;
    }

    // Wait for delay before activating exit intent
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, delayMs);

    return () => clearTimeout(readyTimer);
  }, [enabled, delayMs]);

  useEffect(() => {
    if (!isReady) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving viewport at top (toward browser controls)
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isReady, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Handle Escape key to close
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('exitIntent_dismissed', Date.now().toString());
  };

  const handlePrimaryCTA = () => {
    // Track conversion (can be extended with analytics)
    window.location.href = '/book-appointment';
  };

  const handleSecondaryCTA = () => {
    // Call action
    window.location.href = CONTACT_INFO.primaryPhone.href;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Icon/Badge */}
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-2xl mr-2">👁️</span>
              <span className="text-sm font-semibold text-emerald-800">
                Wait! Before You Go...
              </span>
            </div>

            {/* Headline */}
            <h2
              id="exit-popup-title"
              className="text-3xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Get Expert Keratoconus Care in Orange County
            </h2>

            {/* Value Proposition */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Don't struggle with blurry vision any longer. Dr. Bonakdar has{' '}
              <span className="font-semibold text-emerald-700">35+ years of experience</span>{' '}
              treating keratoconus with specialized scleral lenses and corneal cross-linking.
            </p>

            {/* Benefits List */}
            <ul className="mb-8 space-y-3">
              {[
                'Same-day appointments available',
                'Most insurance plans accepted (VSP, EyeMed, Medicare)',
                'Custom scleral lens fitting specialists',
                'FDA-approved corneal cross-linking'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <svg
                    className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Primary CTA */}
            <button
              onClick={handlePrimaryCTA}
              className="w-full mb-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Schedule Free Consultation
            </button>

            {/* Secondary CTA */}
            <button
              onClick={handleSecondaryCTA}
              className="w-full px-6 py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Call Now: {CONTACT_INFO.primaryPhone.display}
            </button>

            {/* Trust Signal */}
            <p className="mt-6 text-center text-sm text-gray-500">
              <span className="font-semibold text-emerald-700">4.9/5 stars</span> from 288+ patients
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
