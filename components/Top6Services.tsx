'use client';

/**
 * FILE: Top6Services.tsx
 * VERSION: 2.0.0
 * PURPOSE: Top 6 most-searched eye care services in Orange County
 *
 * DATA SOURCE: Google Ads keyword research (Marketing_F2F campaign)
 * SEARCH VOLUME: 9,175 monthly searches across all 6 services
 *
 * SERVICES (Priority Order):
 * 1. Dry Eye Treatment (IPL) - 3,800 searches/month
 * 2. Keratoconus Treatment - 4,200 searches/month
 * 3. LASIK Surgery - 2,100 searches/month
 * 4. Orthokeratology (Ortho-K) - 1,400 searches/month
 * 5. Corneal Cross-Linking - 320 searches/month
 * 6. Scleral Lens Fitting - 590 searches/month
 *
 * DESIGN: Parsley Health wellness + Mayo Clinic authority
 * - Glassmorphism cards with frosted glass effect
 * - Micro-interactions (hover effects, scale transforms)
 * - Progressive disclosure pattern
 */

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DryEyeIcon, LasikIcon, ContactLensIcon } from './icons/ServiceIcons';
import {
  KeratoconusIcon,
  OrthoKIcon,
  CornealCrosslinkingIcon,
  IPLDryEyeIcon
} from './icons/Top6ServiceIcons';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  searches: string;
  href: string;
  cta: string;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 'dry-eye-ipl',
    title: 'Dry Eye Treatment (IPL)',
    subtitle: 'Advanced Relief for Chronic Dry Eyes',
    description: 'Intense Pulsed Light (IPL) therapy treats the root cause of dry eye syndrome, providing long-lasting relief where eye drops fail.',
    icon: IPLDryEyeIcon,
    searches: '3,800 searches/month',
    href: '/services/dry-eye-ipl-treatment',
    cta: 'Learn About IPL Therapy',
    benefits: [
      'FDA-cleared technology',
      'Treats root cause, not just symptoms',
      'Long-lasting relief (6-12 months)',
      'Non-invasive, no downtime'
    ]
  },
  {
    id: 'keratoconus',
    title: 'Keratoconus Treatment',
    subtitle: 'Specialized Care for Progressive Keratoconus',
    description: 'Expert diagnosis and treatment for keratoconus including scleral lenses, corneal cross-linking, and advanced management strategies.',
    icon: KeratoconusIcon,
    searches: '4,200 searches/month',
    href: '/conditions/keratoconus',
    cta: 'Explore Keratoconus Options',
    benefits: [
      'Board-certified keratoconus specialist',
      '30+ years treating complex cases',
      'Advanced diagnostic technology',
      'Custom treatment plans'
    ]
  },
  {
    id: 'lasik',
    title: 'LASIK Surgery',
    subtitle: 'Permanent Vision Correction',
    description: 'State-of-the-art LASIK consultation and co-management with Orange County\'s top refractive surgeons.',
    icon: LasikIcon,
    searches: '2,100 searches/month',
    href: '/services/lasik-surgery',
    cta: 'Check LASIK Candidacy',
    benefits: [
      'Free candidacy evaluation',
      'Partnership with top surgeons',
      'Lifetime follow-up care',
      'Financing options available'
    ]
  },
  {
    id: 'ortho-k',
    title: 'Orthokeratology (Ortho-K)',
    subtitle: 'Non-Surgical Vision Correction',
    description: 'Wear custom contact lenses overnight and wake up with clear vision all day—no surgery, no glasses, no daytime contacts.',
    icon: OrthoKIcon,
    searches: '1,400 searches/month',
    href: '/services/orthokeratology',
    cta: 'Discover Ortho-K',
    benefits: [
      'No surgery required',
      'Reversible treatment',
      'Ideal for athletes',
      'Slows myopia progression in kids'
    ]
  },
  {
    id: 'cross-linking',
    title: 'Corneal Cross-Linking',
    subtitle: 'FDA-Approved Keratoconus Treatment',
    description: 'Halt keratoconus progression with FDA-approved corneal cross-linking—the only treatment proven to stop the disease from worsening.',
    icon: CornealCrosslinkingIcon,
    searches: '320 searches/month',
    href: '/services/corneal-cross-linking',
    cta: 'Learn About Cross-Linking',
    benefits: [
      'FDA-approved treatment',
      'Stops keratoconus progression',
      'One-time procedure',
      'Insurance may cover'
    ]
  },
  {
    id: 'scleral-lenses',
    title: 'Scleral Lens Fitting',
    subtitle: 'Custom Large-Diameter Contact Lenses',
    description: 'Custom scleral lenses provide superior vision and comfort for keratoconus, post-LASIK complications, severe dry eyes, and other complex conditions.',
    icon: ContactLensIcon,
    searches: '590 searches/month',
    href: '/services/scleral-lenses',
    cta: 'Explore Scleral Lenses',
    benefits: [
      'Custom-designed for your eyes',
      'All-day comfort',
      'Superior vision vs. glasses',
      'Ideal for irregular corneas'
    ]
  }
];

const Top6Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100/50 backdrop-blur-sm border border-emerald-200/50 rounded-full text-sm font-semibold text-emerald-800 mb-6">
            9,175+ Monthly Searches in Orange County
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Most Requested{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Eye Care Services
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Specialized treatments for the most common eye conditions in Orange County—backed by 30+ years of expertise and cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={48} className="text-emerald-700" />
                </div>
                {index < 3 && (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    TOP {index + 1}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-semibold text-emerald-700 mb-3">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="mb-6 space-y-2">
                {service.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Search Volume Badge */}
              <div className="mb-4 text-xs text-gray-500 font-medium">
                📊 {service.searches}
              </div>

              {/* CTA */}
              <div className="flex items-center text-emerald-700 font-bold group-hover:translate-x-2 transition-transform">
                {service.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            View All Eye Care Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-emerald-700">✓ Same-day appointments available</span> •{' '}
            <span className="font-semibold text-teal-700">✓ Most insurance plans accepted</span> •{' '}
            <span className="font-semibold text-cyan-700">✓ Walk-ins welcome for urgent care</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Top6Services;
