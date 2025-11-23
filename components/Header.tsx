import Link from 'next/link';
import { Eye, User, Phone, Calendar, Stethoscope, Globe } from 'lucide-react';
import Navigation from './Navigation'; // Client-side component
import { CONTACT_INFO } from '@/lib/contact-info';

const Header = () => {
  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans" role="banner">
      {/* Top Utility Bar - Mayo Style */}
      <div className="bg-eyecare-blue text-white text-xs md:text-sm py-2 border-b border-eyecare-dark-blue">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4 md:space-x-6">
          <a
            href={phoneHref}
            className="flex items-center hover:text-eyecare-lighter-blue transition-colors callrail-phone"
          >
            <Phone className="h-3 w-3 mr-2" />
            <span className="font-medium">{phoneNumber}</span>
          </a>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <a
            href="https://bonakdar.eyefinityehr.com/ema/Login.action"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-eyecare-lighter-blue transition-colors"
          >
            <User className="h-3 w-3 mr-2" />
            <span className="font-medium">Patient Login</span>
          </a>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <Link
            href="/medical-professionals"
            className="flex items-center hover:text-eyecare-lighter-blue transition-colors hidden sm:flex"
          >
            <Stethoscope className="h-3 w-3 mr-2" />
            <span className="font-medium">For Medical Professionals</span>
          </Link>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <Link
            href="/contact"
            className="flex items-center hover:text-eyecare-lighter-blue transition-colors"
          >
            <Globe className="h-3 w-3 mr-2" />
            <span className="font-medium">International Services</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-4 group"
            aria-label="EyeCare Center of Orange County - Home"
          >
            <div className="bg-eyecare-blue p-2 rounded-lg group-hover:bg-eyecare-dark-blue transition-colors">
              <Eye className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-eyecare-navy leading-none tracking-tight group-hover:text-eyecare-blue transition-colors">
                EyeCare Center
              </span>
              <span className="text-sm text-eyecare-light-navy tracking-widest uppercase mt-1">
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
