'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, Check } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

const Hero = () => {
  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Check className="w-4 h-4 mr-2" />
            Trusted by 10,000+ Orange County Residents
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Eye Care in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Orange County
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive eye exams, advanced treatments, and personalized care from Dr. Bonakdar with 35+ years of experience serving Orange County since 1991
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/book-appointment">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Calendar className="mr-2 w-5 h-5" />
                Book Appointment
              </button>
            </Link>

            <a href={phoneHref} className="w-full sm:w-auto">
              <button className="w-full bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center callrail-phone">
                <Phone className="mr-2 w-5 h-5 text-blue-600" />
                {phoneNumber}
              </button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">35+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Patients Treated</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Patient Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

