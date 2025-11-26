'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { CONTACT_INFO } from '@/lib/contact-info';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
      label: 'Dry Eye',
      path: '/services/dry-eye-specialist',
    },
    {
      label: 'Keratoconus',
      path: '/services/keratoconus-treatment',
    },
    {
      label: 'Ortho-K',
      path: '/services/ortho-k',
    },
    {
      label: 'Headache',
      path: '/conditions/headache',
    },
    {
      label: 'Eye Care',
      path: '/conditions',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Glaucoma', path: '/services/glaucoma-management' },
        { label: 'Cataracts', path: '/conditions/cataracts' },
        { label: 'Macular Degeneration', path: '/conditions/macular-degeneration' },
        { label: 'Diabetic Retinopathy', path: '/conditions/diabetic-retinopathy' },
        { label: 'All Conditions', path: '/conditions', featured: true },
      ]
    },
    {
      label: 'Patient Resources',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Comprehensive Eye Exam', path: '/services/comprehensive-eye-exam' },
        { label: 'LASIK Consultation', path: '/services/lasik-consultation' },
        { label: 'Optical Lenses', path: '/services/optical-lenses' },
        { label: 'Contact Lenses', path: '/services/contact-lenses/soft' },
        { label: 'Scleral Lenses', path: '/services/scleral-lens-fitting' },
        { label: 'All Services', path: '/services', featured: true },
      ]
    },
    { path: '/about', label: 'About' },
  ];

  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            {item.hasDropdown ? (
              // Dropdown Menu
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
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
                  className={`absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden ${openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}
                >
                  <div className="p-4">
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.path}
                        className={`block py-2 px-3 rounded-lg ${dropdownItem.featured
                            ? 'font-bold text-eyecare-blue hover:bg-eyecare-lighter-blue mt-2 border-t border-gray-100 pt-3'
                            : 'text-eyecare-navy hover:bg-gray-50 hover:text-eyecare-blue'
                          } transition-colors`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Direct Link
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
                <div key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-3 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors font-medium ${isActive(item.path) ? 'text-eyecare-blue bg-eyecare-lighter-blue' : ''
                      }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="pl-6 bg-gray-50">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.path}
                          className={`block px-4 py-2 text-sm text-gray-600 hover:text-eyecare-blue transition-colors ${dropdownItem.featured ? 'font-semibold border-t border-gray-200 mt-1 pt-2' : ''
                            }`}
                          onClick={closeMobileMenu}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
