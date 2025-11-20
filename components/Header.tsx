import Link from 'next/link';
import { Eye } from 'lucide-react';
import Navigation from './Navigation'; // Client-side component

const Header = () => {
  const phoneNumber = '(714) 558-1182';
  const phoneHref = 'tel:+17145581182';

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

          {/* Navigation Component */}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
