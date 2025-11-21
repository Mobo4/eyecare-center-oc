/**
 * FILE: components/shared/BookAppointmentCTA.tsx
 * PURPOSE: Call-to-action component for booking appointments
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Reusable CTA for service and condition pages.
 * Optimized for conversion with clear value proposition.
 */

import Link from 'next/link';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface BookAppointmentCTAProps {
  serviceName?: string;
  cityName?: string;
  className?: string;
  variant?: 'full' | 'compact' | 'banner';
}

export default function BookAppointmentCTA({
  serviceName,
  cityName,
  className = '',
  variant = 'full'
}: BookAppointmentCTAProps) {
  const contextText = serviceName
    ? `Schedule your ${serviceName.toLowerCase()} consultation`
    : 'Schedule your eye care appointment';

  const locationText = cityName
    ? `Serving ${cityName} and all of Orange County`
    : 'Conveniently located in Orange County';

  if (variant === 'banner') {
    return (
      <section className={`bg-eyecare-blue text-white py-6 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">{contextText}</h2>
              <p className="text-eyecare-lighter-blue">{locationText}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center bg-eyecare-light-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-eyecare-lighter-blue transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-eyecare-blue/5 border border-eyecare-blue/20 rounded-lg p-4 ${className}`}>
        <p className="font-semibold text-gray-900 mb-3">{contextText}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={CONTACT_INFO.primaryPhone.href}
            className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-4 py-2 rounded-md font-medium hover:bg-eyecare-dark-blue transition-all text-sm"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </a>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center border border-eyecare-blue text-eyecare-blue px-4 py-2 rounded-md font-medium hover:bg-eyecare-blue hover:text-white transition-all text-sm"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Book Online
          </Link>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue text-white rounded-xl p-6 md:p-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{contextText}</h2>
      <p className="text-eyecare-lighter-blue mb-6">{locationText}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">Same-Day Appointments</p>
            <p className="text-sm text-eyecare-lighter-blue">Often available</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">Convenient Location</p>
            <p className="text-sm text-eyecare-lighter-blue">Santa Ana, CA</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={CONTACT_INFO.primaryPhone.href}
          className="callrail-phone flex-1 inline-flex items-center justify-center bg-white text-eyecare-blue px-6 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
        >
          <Phone className="w-6 h-6 mr-2" />
          {CONTACT_INFO.primaryPhone.display}
        </a>
        <Link
          href="/book-appointment"
          className="flex-1 inline-flex items-center justify-center bg-eyecare-light-blue text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-eyecare-lighter-blue transition-all"
        >
          <Calendar className="w-6 h-6 mr-2" />
          Book Appointment
        </Link>
      </div>

      <p className="text-center text-sm text-eyecare-lighter-blue mt-4">
        Most insurance plans accepted • Flexible financing available
      </p>
    </div>
  );
}
