/**
 * FILE: components/ConditionCityModal.tsx
 * PURPOSE: Friendly, thorough condition information modal
 * UPDATED: 2025-11-21
 *
 * SEO STRATEGY: Condition+city pages exist for Google but are not navigable
 * from this modal. They are indexed via sitemap and internal links on
 * dedicated index pages. This modal focuses on user education and conversion.
 */

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { X, Eye, ArrowRight, Phone, Calendar, CheckCircle, AlertCircle, Stethoscope, Heart, PlayCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface Condition {
  slug: string;
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  severity?: string;
}

interface ConditionCityModalProps {
  condition: Condition | null;
  onClose: () => void;
}

export default function ConditionCityModal({ condition, onClose }: ConditionCityModalProps) {
  const router = useRouter();

  if (!condition) return null;

  const handleLearnMore = () => {
    router.push(`/conditions/${condition.slug}`);
    onClose();
  };

  // Friendly intro based on condition type
  const getFriendlyIntro = () => {
    const name = condition.name.toLowerCase();
    if (name.includes('dry eye')) {
      return "If your eyes feel gritty, tired, or watery, you're not alone. Dry eye is one of the most common conditions we treat, and the good news is—it's very manageable with the right care.";
    }
    if (name.includes('keratoconus')) {
      return "A keratoconus diagnosis can feel overwhelming, but take a breath. With today's treatment options, most patients maintain excellent vision and live completely normal lives.";
    }
    if (name.includes('glaucoma')) {
      return "Glaucoma is often called the 'silent thief of sight' because it usually has no early symptoms. The good news? When caught early, we can protect your vision for life.";
    }
    if (name.includes('cataract')) {
      return "Cataracts are incredibly common—by age 80, more than half of all Americans either have a cataract or have had cataract surgery. The even better news? Treatment is highly effective.";
    }
    if (name.includes('macular')) {
      return "Age-related macular degeneration affects millions of people, but it doesn't mean you'll lose your sight. Early detection and treatment can make a tremendous difference.";
    }
    if (name.includes('headache') || name.includes('migraine')) {
      return "Eye strain and vision problems are often overlooked causes of headaches and migraines. A comprehensive eye exam might be the key to finding relief.";
    }
    if (name.includes('chalazion') || name.includes('stye') || name.includes('hordeolum')) {
      return "That bump on your eyelid is probably a stye or chalazion—annoying, but usually not serious. Most resolve with simple home care, but persistent ones may need professional treatment.";
    }
    if (name.includes('blepharitis')) {
      return "Blepharitis (eyelid inflammation) is a chronic condition, but with proper daily care and occasional professional treatment, you can keep symptoms well controlled.";
    }
    if (name.includes('conjunctivitis') || name.includes('pink eye')) {
      return "Pink eye is very common and usually clears up on its own. However, some types require treatment to prevent spread or complications—that's where we come in.";
    }
    if (name.includes('floater')) {
      return "Those little shapes drifting across your vision are usually harmless, but new or sudden floaters deserve a prompt eye exam to rule out anything serious.";
    }
    if (name.includes('retinal detachment')) {
      return "Retinal detachment is a medical emergency, but when treated promptly, vision can often be saved. If you're experiencing symptoms, seek care immediately.";
    }
    return `${condition.name} is a condition that affects many people, and understanding it is the first step toward getting the right care. Let us help you navigate your options.`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{condition.name}</h2>
                <p className="text-eyecare-lighter-blue text-sm flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{condition.category}</span>
                  {condition.severity && (
                    <span className={`px-2 py-0.5 rounded-full text-xs ${condition.severity === 'Emergency' ? 'bg-red-500' :
                        condition.severity === 'Serious' ? 'bg-orange-500' :
                          condition.severity === 'Moderate' ? 'bg-yellow-500' :
                            'bg-green-500'
                      }`}>
                      {condition.severity}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Friendly Introduction */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 leading-relaxed">{getFriendlyIntro()}</p>
            </div>
          </div>

          {/* Condition Image */}
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <img
              src={`/images/conditions/${condition.slug}.jpg`}
              alt={condition.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.style.display = 'none';
              }}
            />
          </div>

          {/* What Is This Condition */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-eyecare-blue" />
              What is {condition.name}?
            </h3>
            <p className="text-gray-700 leading-relaxed">{condition.description}</p>
          </div>

          {/* Symptoms */}
          {condition.symptoms && condition.symptoms.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Common Symptoms
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {condition.symptoms.slice(0, 6).map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-500 mt-1">•</span>
                    {symptom}
                  </li>
                ))}
              </ul>
              {condition.symptoms.length > 6 && (
                <p className="text-sm text-gray-500 mt-2">
                  + {condition.symptoms.length - 6} more symptoms...
                </p>
              )}
            </div>
          )}

          {/* Treatment Options */}
          {condition.treatments && condition.treatments.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Treatment Options
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {condition.treatments.slice(0, 6).map((treatment, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    {treatment}
                  </li>
                ))}
              </ul>
              {condition.treatments.length > 6 && (
                <p className="text-sm text-gray-500 mt-2">
                  + {condition.treatments.length - 6} more treatment options...
                </p>
              )}
            </div>
          )}

          {/* Video Placeholder */}
          <div className="bg-gray-100 rounded-xl p-6 text-center border-2 border-dashed border-gray-300">
            <PlayCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium mb-1">Video Coming Soon</p>
            <p className="text-sm text-gray-500">Dr. Alexander Bonakdar explains {condition.name} in simple terms</p>
          </div>

          {/* Learn More Button */}
          <button
            onClick={handleLearnMore}
            className="w-full bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white p-4 rounded-xl hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="font-bold text-lg mb-1">Read Full Details</div>
                <div className="text-eyecare-lighter-blue text-sm">
                  In-depth information, FAQs, and what to expect
                </div>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Get Help?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Our team specializes in {condition.name.toLowerCase()} treatment. Schedule a comprehensive evaluation to discuss your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone flex-1 inline-flex items-center justify-center bg-eyecare-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-all gap-2"
              >
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/book-appointment"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-5 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Online
              </Link>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="text-center text-sm text-gray-500 pt-2">
            <p>Serving all of Orange County • Over 847 5-star reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
