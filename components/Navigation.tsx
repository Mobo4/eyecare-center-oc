'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

/**
 * Progressive Collapsing Navigation with Overflow Detection
 * - Detects when nav items wrap/overflow using ResizeObserver
 * - Only shows "More" dropdown when items are hidden
 * - Hidden items appear in the More dropdown like other dropdowns
 */

interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; path: string; featured?: boolean }[];
}

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hiddenItems, setHiddenItems] = useState<NavItem[]>([]);
  const navListRef = useRef<HTMLUListElement>(null);
  const navItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems: NavItem[] = [
    { label: 'Dry Eye', path: '/services/dry-eye-specialist' },
    { label: 'Keratoconus', path: '/services/keratoconus-treatment' },
    { label: 'Ortho-K', path: '/services/ortho-k' },
    { label: 'Headache', path: '/conditions/headache' },
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
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
  ];

  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  // Detect which items are hidden (wrapped to second line)
  const detectHiddenItems = useCallback(() => {
    if (!navListRef.current) return;

    const navList = navListRef.current;
    const navListRect = navList.getBoundingClientRect();
    const firstRowTop = navListRect.top;
    const hidden: NavItem[] = [];

    navItemRefs.current.forEach((itemRef, index) => {
      if (itemRef) {
        const itemRect = itemRef.getBoundingClientRect();
        // If item's top is significantly below the first row, it's wrapped
        if (itemRect.top > firstRowTop + 10) {
          hidden.push(navItems[index]);
          itemRef.style.visibility = 'hidden';
          itemRef.style.position = 'absolute';
        } else {
          itemRef.style.visibility = 'visible';
          itemRef.style.position = 'relative';
        }
      }
    });

    setHiddenItems(hidden);
  }, []);

  useEffect(() => {
    detectHiddenItems();

    const resizeObserver = new ResizeObserver(() => {
      detectHiddenItems();
    });

    if (navListRef.current) {
      resizeObserver.observe(navListRef.current);
    }

    window.addEventListener('resize', detectHiddenItems);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', detectHiddenItems);
    };
  }, [detectHiddenItems]);

  const renderDropdownItem = (item: NavItem, inMoreDropdown = false) => {
    if (item.hasDropdown && item.dropdownItems) {
      // For items with their own dropdown inside More dropdown
      return (
        <div key={item.path} className={inMoreDropdown ? 'border-t border-gray-100 pt-2 mt-2' : ''}>
          <span className="block px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {item.label}
          </span>
          {item.dropdownItems.map((subItem, idx) => (
            <Link
              key={idx}
              href={subItem.path}
              className={`block py-2 px-3 rounded-lg text-sm ${
                subItem.featured
                  ? 'font-bold text-eyecare-blue hover:bg-eyecare-lighter-blue'
                  : 'text-eyecare-navy hover:bg-gray-50 hover:text-eyecare-blue'
              } transition-colors`}
              onClick={() => setOpenDropdown(null)}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      );
    }

    // Simple link item
    return (
      <Link
        key={item.path}
        href={item.path}
        className={`block py-2 px-3 rounded-lg text-eyecare-navy hover:bg-gray-50 hover:text-eyecare-blue transition-colors ${
          isActive(item.path) ? 'text-eyecare-blue bg-eyecare-lighter-blue' : ''
        }`}
        onClick={() => setOpenDropdown(null)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        {/* Nav Items List */}
        <ul ref={navListRef} className="flex items-center" role="navigation" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => { navItemRefs.current[index] = el; }}
              className="relative flex-shrink-0"
            >
              {item.hasDropdown ? (
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center text-base font-medium text-eyecare-navy hover:text-eyecare-blue transition-colors px-3 py-4 whitespace-nowrap ${
                      isActive(item.path) ? 'text-eyecare-blue' : ''
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <div
                    className={`absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden ${
                      openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-2'
                    }`}
                  >
                    <div className="p-4">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.path}
                          className={`block py-2 px-3 rounded-lg ${
                            dropdownItem.featured
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
                <Link
                  href={item.path}
                  className={`block text-base font-medium text-eyecare-navy hover:text-eyecare-blue transition-colors px-3 py-4 whitespace-nowrap relative group ${
                    isActive(item.path) ? 'text-eyecare-blue' : ''
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-3 left-3 right-3 h-0.5 bg-eyecare-blue transform origin-left transition-transform duration-300 ${
                      isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* More Dropdown - Only visible when items are hidden */}
        {hiddenItems.length > 0 && (
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('more')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center text-base font-medium text-eyecare-navy hover:text-eyecare-blue transition-colors px-3 py-4 whitespace-nowrap"
              aria-expanded={openDropdown === 'more'}
              aria-haspopup="true"
            >
              More
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === 'more' ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute top-full right-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden ${
                openDropdown === 'more'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2'
              }`}
            >
              <div className="p-4">
                {hiddenItems.map((item, index) => renderDropdownItem(item, index > 0))}
              </div>
            </div>
          </div>
        )}

        {/* Request Appointment CTA */}
        <Link
          href="/book-appointment"
          className="ml-2 bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg font-bold text-sm tracking-wide whitespace-nowrap"
        >
          Request Appointment
        </Link>
      </div>

      {/* Mobile Navigation - Traditional Hamburger */}
      <div className="lg:hidden flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-700 hover:text-eyecare-blue transition-colors p-2"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-t shadow-lg z-50" id="mobile-navigation">
            <nav className="py-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-3 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors font-medium ${
                      isActive(item.path) ? 'text-eyecare-blue bg-eyecare-lighter-blue' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="pl-6 bg-gray-50">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.path}
                          className={`block px-4 py-2 text-sm text-gray-600 hover:text-eyecare-blue transition-colors ${
                            dropdownItem.featured ? 'font-semibold border-t border-gray-200 mt-1 pt-2' : ''
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
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
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Patient login - Opens in new window"
                >
                  Patient Login
                </a>
                <Link
                  href="/book-appointment"
                  className="block text-center w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
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
