'use client';

import React from 'react';

interface TrustSignalsProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

const TrustSignals: React.FC<TrustSignalsProps> = ({ variant = 'horizontal', className = '' }) => {
  const trustItems = [
    {
      icon: '🏆',
      title: '30+ Years Experience',
      subtitle: 'Trusted expertise'
    },
    {
      icon: '👥',
      title: '10,000+ Patients Helped',
      subtitle: 'Proven results'
    },
    {
      icon: '🏥',
      title: 'Most Insurance Accepted',
      subtitle: 'VSP, EyeMed & more'
    }
  ];

  const layoutClasses = variant === 'horizontal' 
    ? 'grid grid-cols-1 sm:grid-cols-3 gap-6' 
    : 'space-y-4';

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className={layoutClasses}>
        {trustItems.map((item, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-xl text-eyecare-blue mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSignals;

