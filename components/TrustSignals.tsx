'use client';

import React from 'react';
import { Award, Users, ShieldCheck } from 'lucide-react';

interface TrustSignalsProps {
  className?: string;
}

const TrustSignals: React.FC<TrustSignalsProps> = ({ className = '' }) => {
  const trustItems = [
    {
      icon: Award,
      title: '35+ Years Experience',
      subtitle: 'Serving Orange County since 1991'
    },
    {
      icon: Users,
      title: '10,000+ Patients',
      subtitle: 'Trusted by your community'
    },
    {
      icon: ShieldCheck,
      title: 'Board Certified',
      subtitle: 'Highest standard of care'
    }
  ];

  return (
    <section className={`bg-white py-12 border-b border-eyecare-blue/5 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-4 p-4 rounded-xl hover:bg-eyecare-warm/50 transition-colors">
              <div className="p-3 bg-eyecare-lighter-blue rounded-full text-eyecare-blue">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-serif font-bold text-lg text-eyecare-navy">{item.title}</h3>
                <p className="text-sm text-eyecare-light-navy">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;

