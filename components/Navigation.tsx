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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    {
      label: 'Conditions',
      path: '/conditions',
    },
    {
      label: 'Services',
      path: '/services',
    },
    { path: '/contact', label: 'Contact Us' },
  ];

  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            {item.label === 'Services' ? (
              // Mega Menu for Services
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href={item.path}
                  className={`flex items-center text-gray-700 hover:text-eyecare-blue transition-colors font-medium ${
                    isActive(item.path) ? 'text-eyecare-blue border-b-2 border-eyecare-blue' : ''
                  }`}
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-md shadow-lg border transition-all duration-200 z-50 ${
                    isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div className="p-4 grid grid-cols-2 gap-4">
                    {services.slice(0, 10).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}/santa-ana`}
                        className="p-3 rounded-md hover:bg-eyecare-lighter-blue transition-colors"
                      >
                        <p className="font-semibold text-gray-900">{service.name}</p>
                        <p className="text-sm text-gray-500">{service.description.substring(0, 50)}...</p>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 text-center border-t">
                    <Link href="/services" className="font-semibold text-eyecare-blue hover:underline">
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={item.path}
                className={`text-gray-700 hover:text-eyecare-blue transition-colors font-medium ${
                  isActive(item.path) ? 'text-eyecare-blue border-b-2 border-eyecare-blue' : ''
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Right side buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href={phoneHref}
          className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue transition-colors callrail-phone"
          aria-label={`Call office at ${phoneNumber}`}
        >
          <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
          <span className="font-medium">{phoneNumber}</span>
        </a>
        <Link
          href="/book-appointment"
          className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-2 rounded-md transition-colors font-medium"
        >
          Book Appointment
        </Link>
      </div>

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
                  className={`block px-4 py-3 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors ${
                    isActive(item.path) ? 'text-eyecare-blue bg-eyecare-lighter-blue' : ''
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
