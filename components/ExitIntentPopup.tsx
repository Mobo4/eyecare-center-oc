'use client';

/**
 * FILE: ExitIntentPopup.tsx
 * VERSION: 2.0.0
 * PURPOSE: Dynamic exit-intent popup that adapts to page content
 */

import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ExitIntentPopupProps {
  enabled?: boolean;
  delayMs?: number;
  title?: string;
  description?: string;
  benefits?: string[];
  imageSrc?: string;
  ctaText?: string;
}

export default function ExitIntentPopup({
  enabled = true,
  delayMs = 1000, // Reduced to 1s for faster engagement
  title = 'Get Expert Eye Care in Orange County',
  description = "Don't struggle with vision issues any longer. Dr. Alexander Bonakdar has 35+ years of experience providing comprehensive eye care and specialized treatments.",
  benefits = [
    'Same-day appointments available',
    'Most insurance plans accepted',
    'Advanced diagnostic technology',
    'Experienced specialist care'
  ],
  imageSrc = '/images/hero-background.png',
  ctaText = 'Schedule Free Consultation'
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  // Reset state on path change (navigation)
  useEffect(() => {
    setIsVisible(false);
    setIsReady(false);
  }, [pathname]);

  useEffect(() => {
    if (!enabled) return;

    // NOTE: Storage checks removed for testing/demo purposes as requested.
    // In production, you would uncomment these to prevent spamming users.

    // Check if already shown this session
    const shownThisSession = sessionStorage.getItem('exitIntent_shown');
    if (shownThisSession) return;

    // Wait for delay before activating exit intent
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, delayMs);

    return () => clearTimeout(readyTimer);
  }, [enabled, delayMs, pathname]); // Re-run on path change

  useEffect(() => {
    if (!isReady) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving viewport at top (toward browser controls)
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
        // sessionStorage.setItem('exitIntent_shown', 'true'); // Disabled for testing
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
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitIntent_shown', 'true'); // Prevent showing again this session
  };

  const handlePrimaryCTA = () => {
    window.location.href = '/book-appointment';
  };

  const handleSecondaryCTA = () => {
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
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative animate-in fade-in zoom-in-95 duration-300 overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors focus:outline-none shadow-sm"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Image Section (Left) */}
          <div className="w-full md:w-2/5 relative h-48 md:h-auto">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
            <div className="absolute bottom-4 left-4 text-white md:hidden">
              <p className="font-bold text-lg">Wait! Before You Go...</p>
            </div>
          </div>

          {/* Content Section (Right) */}
          <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
            {/* Badge */}
            <div className="hidden md:inline-flex items-center px-3 py-1 bg-emerald-100 rounded-full w-fit mb-4">
              <span className="text-lg mr-2">👁️</span>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                Special Offer
              </span>
            </div>

            {/* Headline */}
            <h2
              id="exit-popup-title"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight"
            >
              {title}
            </h2>

            {/* Value Proposition */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Benefits List */}
            <ul className="mb-8 space-y-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={handlePrimaryCTA}
                className="w-full px-6 py-3 bg-eyecare-blue hover:bg-eyecare-dark-blue text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                {ctaText}
              </button>
              <button
                onClick={handleSecondaryCTA}
                className="w-full px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors focus:outline-none"
              >
                Call Now: {CONTACT_INFO.primaryPhone.display}
              </button>
            </div>

            {/* Trust Signal */}
            <p className="mt-4 text-center text-xs text-gray-400">
              Rated 4.9/5 stars by patients in Orange County
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
