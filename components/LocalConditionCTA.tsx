'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface LocalConditionCTAProps {
  cityName: string;
  conditionName: string;
  className?: string;
}

const LocalConditionCTA: React.FC<LocalConditionCTAProps> = ({
  cityName,
  conditionName,
  className = ''
}) => {
  return (
    <div className={`bg-eyecare-blue text-white p-6 rounded-lg ${className}`}>
      <h3 className="text-xl font-bold mb-3">Ready to Schedule?</h3>
      <p className="text-eyecare-lighter-blue mb-4 text-sm">
        Get expert {conditionName.toLowerCase()} treatment convenient to {cityName}.
      </p>
      <div className="space-y-3">
        <a
          href={CONTACT_INFO.primaryPhone.href}
          className="callrail-phone block w-full bg-white text-eyecare-blue text-center px-4 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
        >
          <Phone className="inline w-4 h-4 mr-2" />
          Call {CONTACT_INFO.primaryPhone.display}
        </a>
        <Link
          href="/book-appointment"
          className="block w-full bg-eyecare-light-blue text-white text-center px-4 py-3 rounded-md font-semibold hover:bg-eyecare-lighter-blue transition-all"
        >
          <Calendar className="inline w-4 h-4 mr-2" />
          Book Online
        </Link>
      </div>
    </div>
  );
};

export default LocalConditionCTA;

