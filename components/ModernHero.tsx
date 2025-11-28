'use client';

/**
 * FILE: ModernHero.tsx
 * VERSION: 2.0.0
 * PURPOSE: Parsley Health + Mayo Clinic inspired hero section with Google Ads keyword optimization
 *
 * DESIGN INSPIRATION:
 * - Parsley Health: Mint green gradients, wellness aesthetic, organic curves, conversational CTAs
 * - Mayo Clinic: Medical authority, professional blue tones, trust-building, clinical excellence
 *
 * SEO OPTIMIZATION:
 * - Integrates high-converting Google Ads keywords from Marketing_F2F campaign
 * - Targets: "keratoconus specialist orange county", "scleral lenses", "dry eye treatment IPL"
 * - Based on actual campaign data with $15-25 CPC keywords
 *
 * FEATURES:
 * - Glassmorphism trust badges (frosted glass effect)
 * - Micro-interactions (200-300ms transitions, hover effects)
 * - Conversational copy (reduces friction, increases engagement)
 * - Mobile-first responsive design
 * - WCAG 2.1 Level AA compliant
 */

import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, Check, Award, Users, Star } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

const ModernHero = () => {
  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Parsley Health Inspired Background - Mint to Forest Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        {/* Organic flowing shapes - wellness aesthetic */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl opacity-60 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-50/30 to-emerald-50/30 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Mayo Clinic Inspired Trust Badge - Medical Authority */}
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md border border-emerald-200/50 rounded-full text-sm font-semibold text-gray-800 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
              <Award className="w-5 h-5 mr-2 text-emerald-600" />
              Board-Certified Keratoconus Specialist • 30+ Years Experience
            </div>

            {/* H1 - Conversational + Keyword-Optimized */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Eye Care When{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                You Need It Most
              </span>
            </h1>

            {/* Subheadline - High-Converting Keywords Integration */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
              Same-day appointments for keratoconus, dry eye (IPL), scleral lenses, and advanced eye care in Orange County
            </p>

            {/* Supporting Copy - Builds Trust */}
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Dr. Alexander Bonakdar combines clinical excellence with personalized care—no long waits,
              no rushed appointments. Walk-ins welcome for urgent eye concerns.
            </p>

            {/* CTA Buttons - Conversational + Micro-interactions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/book-appointment">
                <button
                  className="group w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center"
                  aria-label="Book same-day appointment online"
                >
                  <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Book Same-Day Appointment
                </button>
              </Link>

              <a href={phoneHref} className="w-full sm:w-auto">
                <button
                  className="group w-full bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-full text-lg font-bold border-3 border-emerald-600/20 hover:border-emerald-600/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center callrail-phone"
                  aria-label={`Call Dr. Alexander Bonakdar at ${phoneNumber}`}
                >
                  <Phone className="mr-3 w-6 h-6 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
                  {phoneNumber}
                </button>
              </a>
            </div>

            {/* Glassmorphism Trust Signals - Parsley Health Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Trust Badge 1 - Experience */}
              <div className="group bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full">
                    <Award className="w-10 h-10 text-emerald-700" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text mb-2">
                  30+ Years
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Specialized Experience
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Board-certified in advanced keratoconus and corneal treatments
                </div>
              </div>

              {/* Trust Badge 2 - Patients */}
              <div className="group bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full">
                    <Users className="w-10 h-10 text-teal-700" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 text-transparent bg-clip-text mb-2">
                  10,000+
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Patients Treated
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Trusted throughout Orange County for complex eye conditions
                </div>
              </div>

              {/* Trust Badge 3 - Rating */}
              <div className="group bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full">
                    <Star className="w-10 h-10 text-cyan-700 fill-cyan-700" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text mb-2">
                  4.9★
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Patient Rating
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Consistently rated Orange County's top eye care specialist
                </div>
              </div>
            </div>

            {/* Social Proof - Insurance Acceptance */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 font-medium">
                <Check className="inline-block w-4 h-4 text-emerald-600 mr-1" />
                Most insurance plans accepted including VSP, EyeMed, and Medical Insurance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Subtle Design Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-600/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-600/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
