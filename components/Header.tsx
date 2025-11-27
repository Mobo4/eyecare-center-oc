'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Eye, User, Phone, Stethoscope, Globe, ChevronDown, X } from 'lucide-react';
import Navigation from './Navigation';
import { CONTACT_INFO } from '@/lib/contact-info';

interface UtilityItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  priority: number; // Lower = higher priority (always visible longer)
}

const Header = () => {
  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [hiddenItems, setHiddenItems] = useState<UtilityItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLElement>>(new Map());

  // Utility items in priority order (phone is separate, always visible)
  const utilityItems: UtilityItem[] = [
    {
      id: 'patient-login',
      label: 'Patient Login',
      href: 'https://bonakdar.eyefinityehr.com/ema/Login.action',
      icon: <User className="h-3 w-3 mr-1.5 flex-shrink-0" />,
      external: true,
      priority: 1,
    },
    {
      id: 'medical-professionals',
      label: 'For Medical Professionals',
      href: '/medical-professionals',
      icon: <Stethoscope className="h-3 w-3 mr-1.5 flex-shrink-0" />,
      priority: 2,
    },
    {
      id: 'international',
      label: 'International Services',
      href: '/contact',
      icon: <Globe className="h-3 w-3 mr-1.5 flex-shrink-0" />,
      priority: 3,
    },
  ];

  // Detect which items fit
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      // Reserve space for phone (180px), More button (80px), and some padding (40px)
      const reservedSpace = 300;
      let availableWidth = containerWidth - reservedSpace;

      const visible: string[] = [];
      const hidden: UtilityItem[] = [];

      // Sort by priority
      const sortedItems = [...utilityItems].sort((a, b) => a.priority - b.priority);

      sortedItems.forEach((item) => {
        const element = itemsRef.current.get(item.id);
        if (element) {
          const itemWidth = element.offsetWidth + 24; // Include gap
          if (availableWidth >= itemWidth) {
            availableWidth -= itemWidth;
            visible.push(item.id);
          } else {
            hidden.push(item);
          }
        } else {
          // If element not measured yet, estimate
          const estimatedWidth = item.label.length * 7 + 40;
          if (availableWidth >= estimatedWidth) {
            availableWidth -= estimatedWidth;
            visible.push(item.id);
          } else {
            hidden.push(item);
          }
        }
      });

      setVisibleItems(visible);
      setHiddenItems(hidden);
    };

    // Initial check after mount
    const timer = setTimeout(checkOverflow, 100);

    window.addEventListener('resize', checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const renderUtilityLink = (item: UtilityItem, inDropdown = false) => {
    const className = inDropdown
      ? 'flex items-center px-4 py-2.5 text-gray-700 hover:bg-eyecare-lighter-blue hover:text-eyecare-blue transition-colors text-sm'
      : 'flex items-center hover:text-eyecare-lighter-blue transition-colors whitespace-nowrap';

    if (item.external) {
      return (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={() => setMoreMenuOpen(false)}
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </a>
      );
    }

    return (
      <Link
        key={item.id}
        href={item.href}
        className={className}
        onClick={() => setMoreMenuOpen(false)}
      >
        {item.icon}
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans" role="banner">
      {/* Top Utility Bar */}
      <div className="bg-eyecare-blue text-white text-xs md:text-sm py-2 border-b border-eyecare-dark-blue">
        <div
          ref={containerRef}
          className="container mx-auto px-4 flex justify-end items-center gap-3 md:gap-4"
        >
          {/* Phone - Always Visible */}
          <a
            href={phoneHref}
            className="flex items-center hover:text-eyecare-lighter-blue transition-colors callrail-phone flex-shrink-0"
          >
            <Phone className="h-3 w-3 mr-1.5" />
            <span className="font-medium">{phoneNumber}</span>
          </a>

          {/* Divider */}
          <div className="h-4 w-px bg-white/20 flex-shrink-0" />

          {/* Visible Utility Items */}
          {utilityItems
            .filter((item) => visibleItems.includes(item.id))
            .sort((a, b) => a.priority - b.priority)
            .map((item, index) => (
              <div key={item.id} className="flex items-center gap-3 md:gap-4">
                <div
                  ref={(el) => {
                    if (el) itemsRef.current.set(item.id, el);
                  }}
                >
                  {renderUtilityLink(item)}
                </div>
                {index < visibleItems.length - 1 && (
                  <div className="h-4 w-px bg-white/20 flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}

          {/* More Dropdown - Only when items are hidden */}
          {hiddenItems.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className="flex items-center hover:text-eyecare-lighter-blue transition-colors font-medium"
                aria-expanded={moreMenuOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown className={`h-3 w-3 ml-1 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMoreMenuOpen(false)}
                  />
                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-50 min-w-48 overflow-hidden">
                    {hiddenItems.map((item) => renderUtilityLink(item, true))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 md:space-x-4 group flex-shrink-0"
            aria-label="EyeCare Center of Orange County - Home"
          >
            <div className="bg-eyecare-blue p-1.5 md:p-2 rounded-lg group-hover:bg-eyecare-dark-blue transition-colors">
              <Eye className="h-6 w-6 md:h-8 md:w-8 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-serif font-bold text-eyecare-navy leading-none tracking-tight group-hover:text-eyecare-blue transition-colors">
                EyeCare Center
              </span>
              <span className="text-xs md:text-sm text-eyecare-light-navy tracking-widest uppercase mt-0.5 md:mt-1">
                of Orange County
              </span>
            </div>
          </Link>

          {/* Navigation Component */}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
