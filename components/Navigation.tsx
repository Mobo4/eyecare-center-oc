'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { CONTACT_INFO } from '@/lib/contact-info';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    {
      label: 'Care & Services',
      path: '/services',
    },
    {
      label: 'Conditions & Treatments',
      path: '/conditions',
    },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            {item.label === 'Services' ? (
              // Mega Menu for Services
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href={item.path}
                  className={`flex items-center text-base font-medium text-eyecare-navy hover:text-eyecare-blue transition-colors py-2 ${isActive(item.path) ? 'text-eyecare-blue' : ''
                    }`}
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div
                  className={`absolute top-full -left-4 mt-0 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}
                >
                  <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-4">
                    {services.slice(0, 10).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}/santa-ana`}
                        className="group/item flex flex-col"
                      >
                        <span className="font-semibold text-eyecare-navy group-hover/item:text-eyecare-blue transition-colors">{service.name}</span>
                        <span className="text-xs text-gray-500 line-clamp-1">{service.description}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-eyecare-warm p-4 text-center border-t border-eyecare-blue/5">
                    <Link href="/services" className="text-sm font-bold text-eyecare-blue hover:underline">
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={item.path}
                className={`text-base font-medium text-eyecare-navy hover:text-eyecare-blue transition-colors py-2 relative group ${isActive(item.path) ? 'text-eyecare-blue' : ''
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-eyecare-blue transform origin-left transition-transform duration-300 ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
              </Link>
            )}
          </div>
        ))}

        {/* Search Icon */}
        <button className="text-eyecare-navy hover:text-eyecare-blue transition-colors p-2" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Request Appointment Button - Main Nav CTA */}
        <Link
          href="/book-appointment"
          className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg font-bold text-sm tracking-wide"
        >
          Request Appointment
        </Link>
      </nav>

      {/* Mobile Menu button and Navigation */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-eyecare-blue transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-t shadow-lg" id="mobile-navigation">
            <nav className="py-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors ${isActive(item.path) ? 'text-eyecare-blue bg-eyecare-lighter-blue' : ''
                    }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-4 space-y-3 border-t mt-4">
                <a
                  href={phoneHref}
                  className="flex items-center justify-center text-eyecare-blue hover:text-eyecare-dark-blue transition-colors py-2 callrail-phone"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">{phoneNumber}</span>
                </a>
                <a
                  href="https://bonakdar.eyefinityehr.com/ema/Login.action"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-6 py-3 rounded-md transition-colors font-medium"
                  onClick={closeMobileMenu}
                  aria-label="Patient login - Opens in new window"
                >
                  Patient Login
                </a>
                <Link
                  href="/book-appointment"
                  className="block text-center w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
