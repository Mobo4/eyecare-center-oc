'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

const Footer = () => {
  const [showFullEmail, setShowFullEmail] = useState(false);
  const phoneNumber = CONTACT_INFO.primaryPhone.display;
  const phoneHref = CONTACT_INFO.primaryPhone.href;
  const email = CONTACT_INFO.email.display;

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                EyeCare Center of Orange County provides comprehensive eye care services with advanced vision technology and expert medical professionals specializing in keratoconus, dry eye treatment, and cutting-edge vision solutions.
              </p>
              <div className="mt-4 flex space-x-2 justify-center">
                <a href="https://www.facebook.com/people/Eyecare-Center-of-Orange-County/100063553282924/" target="_blank" rel="noopener noreferrer" className="bg-eyecare-blue p-2 rounded-full hover:bg-eyecare-light-blue transition-colors" aria-label="Facebook - Opens in new window">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/eyecarecenteroc/" target="_blank" rel="noopener noreferrer" className="bg-eyecare-blue p-2 rounded-full hover:bg-eyecare-light-blue transition-colors" aria-label="Instagram - Opens in new window">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.60 4.123v.08c0 2.643-.012 2.987-.60 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.60-4.123.60h-.08c-2.643 0-2.987-.012-4.043-.60-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.60-1.379-.60-3.808v-.63c0-2.43.013-2.784.60-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@eyecarecenteroc" target="_blank" rel="noopener noreferrer" className="bg-eyecare-blue p-2 rounded-full hover:bg-eyecare-light-blue transition-colors" aria-label="YouTube - Opens in new window">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 01 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">About Our Center</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Our Services</Link></li>
                <li><Link href="/conditions" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Eye Conditions</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Contact & Location</Link></li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Eye Conditions</h3>
              <ul className="space-y-2">
                <li><Link href="/conditions/keratoconus" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Keratoconus Treatment</Link></li>
                <li><Link href="/conditions/dry-eye-syndrome" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Dry Eye Syndrome</Link></li>
                <li><Link href="/conditions/myopia" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Myopia Control</Link></li>
                <li><Link href="/conditions/astigmatism" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Astigmatism</Link></li>
                <li><Link href="/conditions/computer-vision-syndrome" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Computer Vision</Link></li>
                <li><Link href="/conditions/headache" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Headache & Eye Strain</Link></li>
                <li><Link href="/conditions/blepharitis-meibomitis" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Blepharitis</Link></li>
                <li><Link href="/conditions/allergic-conjunctivitis" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Eye Allergies</Link></li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Orange County Areas</h3>
              <ul className="space-y-2">
                <li><Link href="/locations/santa-ana" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Santa Ana</Link></li>
                <li><Link href="/locations/irvine" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Irvine</Link></li>
                <li><Link href="/locations/newport-beach" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Newport Beach</Link></li>
                <li><Link href="/locations/costa-mesa" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Costa Mesa</Link></li>
                <li><Link href="/locations/tustin" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Tustin</Link></li>
                <li><Link href="/locations/anaheim" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Anaheim</Link></li>
                <li><Link href="/locations/orange" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Orange</Link></li>
                <li><Link href="/locations/fountain-valley" className="text-gray-300 hover:text-eyecare-light-blue transition-colors">Fountain Valley</Link></li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex flex-col items-center justify-center">
                  <MapPin className="w-5 h-5 text-eyecare-light-blue mb-2" />
                  <span className="text-gray-300 text-center">801 North Tustin Ave #404, Santa Ana, CA 92705</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <Phone className="w-5 h-5 text-eyecare-light-blue mb-2" />
                  <a href={phoneHref} className="text-gray-300 hover:text-eyecare-light-blue transition-colors callrail-phone font-semibold text-lg text-center">{phoneNumber}</a>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <Mail className="w-5 h-5 text-eyecare-light-blue mb-2" />
                  <div className="text-center">
                    <span className="text-gray-300">
                      Email: {showFullEmail ? (
                        <a href={`mailto:${email}`} className="text-eyecare-light-blue hover:underline">{email}</a>
                      ) : (
                        <span>eye***@gmail.com</span>
                      )}
                    </span>
                    {!showFullEmail && (
                      <button
                        onClick={() => setShowFullEmail(true)}
                        className="block text-sm text-eyecare-light-blue hover:underline mt-1 mx-auto"
                      >
                        Show full email
                      </button>
                    )}
                  </div>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <Clock className="w-5 h-5 text-eyecare-light-blue mb-2" />
                  <div className="text-center">
                    <p className="text-gray-300 font-semibold text-eyecare-light-blue">Office Hours:</p>
                    <p className="text-gray-300">Mon-Thu: 9am - 6pm</p>
                    <p className="text-gray-300">Fri: 9am - 5pm</p>
                    <p className="text-gray-300">Sat: By Appointment Only</p>
                    <p className="text-gray-300">Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} EYECARE CENTER OF ORANGE COUNTY. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/medical-disclaimer" className="hover:text-white transition-colors">
                Medical Disclaimer
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500 max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> The information on this website is for informational purposes only and does not constitute medical advice. Please consult with a qualified healthcare professional for any medical concerns.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
