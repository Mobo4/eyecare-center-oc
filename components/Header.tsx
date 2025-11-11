'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Eye, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
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
      label: 'Services',
      submenu: [
        { path: '/conditions', label: 'All Eye Conditions' },
        { path: '/conditions/lasik', label: 'LASIK' },
        { path: '/conditions/cataract', label: 'Cataract Surgery' },
        { path: '/conditions/dry-eye', label: 'Dry Eye Treatment' },
        { path: '/conditions/keratoconus', label: 'Keratoconus' },
        { path: '/conditions/ortho-k', label: 'Ortho-K' },
        { path: '/conditions/headache-eye-fatigue', label: 'Headache & Eye Fatigue' },
        { path: '/eyewear', label: 'Eyewear' }
      ]
    },
    { path: '/contact', label: 'Contact Us' }
  ];

  const phoneNumber = '(949) 364-0008';
  const phoneHref = 'tel:+19493640008';

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            aria-label="EyeCare Center of Orange County - Home"
          >
            <Eye className="h-8 w-8 text-eyecare-blue" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                EyeCare Center of Orange County
              </span>
              <span className="text-sm text-eyecare-light-blue leading-tight">
                Comprehensive Eye Care & Vision Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center text-gray-700 hover:text-eyecare-blue transition-colors font-medium"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                      aria-label={`${item.label} menu`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                    </button>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border transition-all duration-200 z-50 ${
                        isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
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
              href="/contact"
              className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-2 rounded-md transition-colors font-medium"
            >
              Schedule Appointment
            </Link>
          </div>

          {/* Mobile Menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-eyecare-blue transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t" id="mobile-navigation">
            <nav className="py-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <div className="px-4 py-3 text-gray-700 font-medium border-b">
                        {item.label}
                      </div>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-8 py-2 text-gray-600 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors ${
                        isActive(item.path) ? 'text-eyecare-blue bg-eyecare-lighter-blue' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA buttons */}
              <div className="px-4 py-4 space-y-3 border-t mt-4">
                <a
                  href={phoneHref}
                  className="flex items-center justify-center text-eyecare-blue hover:text-eyecare-dark-blue transition-colors py-2 callrail-phone"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">{phoneNumber}</span>
                </a>
                <Link
                  href="/contact"
                  className="block text-center w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Schedule Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
